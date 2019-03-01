pipeline {
  parameters {
    choice(name: 'destination', description: 'Destination folder', choices: ['asterics-web-devlinux', 'asterics-web-devwindows', 'asterics-web-production' ])
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin/(.*)', defaultValue: env.BRANCH_NAME, type: 'PT_BRANCH_TAG', useRepository: 'https://github.com/asterics/asterics-web.git')
    gitParameter(name: 'BRANCH_DOCS', branchFilter: 'origin/(.*)', defaultValue: env.BRANCH_NAME_DOCS, type: 'PT_BRANCH_TAG', useRepository: 'https://github.com/asterics/asterics-docs.git')
  }
  agent {
    docker {
      image params.image
      label params.agent
    }
  }
  stages {
    stage('Source') {
      steps {
        git branch: params.BRANCH, url: 'https://github.com/asterics/asterics-web'
      }
    }
    stage('Build') {
      environment {
        VERBOSE = true
      }
      steps {
        sh '''
          npm install --prefix ./asterics-web-vue
          npm run build --prefix ./asterics-web-vue
        '''
      }
    }
    stage('Deploy') {
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
  }
  post {
    always {
      cleanWs cleanWhenAborted: false, cleanWhenFailure: false, cleanWhenNotBuilt: false
    }
  }
}
