pipeline {
  parameters {
    booleanParam(name: 'deploy', defaultValue: true, description: 'Deploy build')
    booleanParam(name: 'deploy_io', defaultValue: false, description: 'Deploy build to github.io')
    booleanParam(name: 'deploy_io_exchange', defaultValue: false, description: 'Exchange deployed build to github.io with previous commit')
    booleanParam(name: 'store', defaultValue: false, description: 'Store build')
    booleanParam(name: 'release', defaultValue: false, description: 'Release build')
    booleanParam(name: 'release_comment', defaultValue: true, description: 'Add comment to each issue and pull request resolved')
    password(name: 'GH_TOKEN', defaultValue: '', description: 'Github user token. Note: don\'t use a password, will be logged to console on error.')
    choice(name: 'destination', description: 'Destination folder', choices: ['asterics-web-devlinux', 'asterics-web-devwindows', 'asterics-web-production' ])
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(branchFilter: 'origin.*?/(.*)', defaultValue: 'master', name: 'BRANCH', type: 'PT_BRANCH_TAG', useRepository: "asterics-web")
    gitParameter(branchFilter: 'origin.*?/(.*)', defaultValue: 'master', name: 'BRANCH_DOCS', type: 'PT_BRANCH_TAG', useRepository: "asterics-docs")
    gitParameter(branchFilter: 'origin.*?/(.*)', defaultValue: 'master', name: 'BRANCH_WEBACS', type: 'PT_BRANCH_TAG', useRepository: "WebACS")
  }
  triggers {
    // pollSCM('H/15 * * * *')
    pollSCM('* * * * *')
  }
  agent none
  stages {
    stage('Cleanup') {
      agent {
        label params.agent
      }
      steps {
        deleteDir()
      }
    }
    stage('Build') {
      agent {
        docker {
          image params.image
          label params.agent
        }
      }
      environment {
        FATALITY = true
        VERBOSE = true
        ENDPOINT_DOCS = "docs"
      }
      steps {
        sh '''
          git tag -l
          npm install --prefix ./asterics-web-vue
          npm run build --prefix ./asterics-web-vue
          git tag -l
        '''
      }
    }
    stage('Prepare: Release/Store') {
      when { 
        anyOf { 
          equals expected: true, actual: params.release
          equals expected: true, actual: params.store
        }
      }
      agent {
        label params.agent
      }
      steps {
        sh 'cd ./asterics-web-vue/dist && zip -r ../asterics-web.zip *'
      }
    }
    stage('Output') {
      parallel {
        stage('Deploy') {
          when {
            equals expected: true, actual: params.deploy
          }
          agent {
            label params.agent
          }
          environment {
            SERVER = credentials('server')
          }
          steps {
            sh "ln -sf ./asterics-web-vue/dist ${params.destination}"
            script {
              def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
              sshRemove remote: remote, path: "/var/www/html/${params.destination}", failOnError: false
              sshPut remote: remote, from: params.destination, into: '/var/www/html/'
            }
          }
        }
        stage('Deploy: Github IO') {
          when {
            equals expected: true, actual: params.deploy_io
          }
          agent {
            label params.agent
          }
          steps {
            sh '''
              git tag -l
              git clone -b gh-pages --single-branch https://github.com/asterics/asterics-web.git gh-pages
              git tag -l
            '''
            script {
              if (params.deploy_io_exchange) {
                sh '''
                  git tag -l
                  cd gh-pages
                  git log
                  git reset --hard HEAD~1
                  git log
                  git tag -l
                '''
              }
            }
            sh '''
              git tag -l
              rm -rf gh-pages/*
              cp -r asterics-web-vue/dist/* gh-pages/
              git tag -l
              cd gh-pages
              git tag -l
              git add .
              git add -u .
              git -c user.name='Mr. Jenkins' -c user.email='studyathome@technikum-wien.at' commit -m 'docs: release asterics-web'
              git push -f https://$GH_TOKEN@github.com/asterics/asterics-web.git
              git tag -l
            '''
          }
        }
        stage('Store') {
          when {
            equals expected: true, actual: params.store
          }
          agent {
            label params.agent
          }
          steps {
            archiveArtifacts artifacts: 'asterics-web-vue/asterics-web.zip', fingerprint: true
            archiveArtifacts artifacts: 'asterics-web-vue/dist/build.json', fingerprint: true
          }
        }
        stage('Release') {
          when {
            // branch 'master'
            // changeset 'assets'
            equals expected: true, actual: params.release
          }
          agent {
            docker {
              image params.image
              label params.agent
            }
          }
          environment {
            GIT_BRANCH = "$BRANCH"
          }
          steps {
            sh '''
              git tag -l
              git checkout $BRANCH
              git pull
              git tag -l
              rm -rf ./asterics-web-vue/src/external/* .git/modules/asterics-web-vue/src/external/*
              npm run --prefix ./asterics-web-vue release:prepare
              npm run --prefix ./asterics-web-vue release -- --branch $BRANCH
              git tag -l
            '''
          }
        }
      }
    }
  }
}
