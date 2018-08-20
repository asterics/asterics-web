<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">{{ selectedFolder }}</div>
        </v-card-title>

        <v-slide-y-transition>
          <v-card-text v-show="show">

                <v-list subheader>
                  <v-subheader inset>Files: {{ files.length }}</v-subheader>
                  <v-list-tile v-for="file in files" :key="file" avatar @click="fileSelect(file)">
                    <v-list-tile-avatar>
                      <v-icon class="white lighten-1 grey--text">insert_drive_file</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>{{ format(file.split(".")[0]) }}</v-list-tile-content>
                  </v-list-tile>

                  <div v-if="folders.length > 0">
                    <v-divider inset></v-divider>

                    <v-subheader inset>Folder: {{ folders.length }}</v-subheader>
                    <v-list-tile v-for="f in folders" :key="f" avatar @click="folderSelect(f)">
                      <v-list-tile-avatar>
                        <v-icon class="white lighten-1 grey--text">folder_open</v-icon>
                      </v-list-tile-avatar>
                      <v-list-tile-content>{{ format(f) }}</v-list-tile-content>
                    </v-list-tile>
                  </div>

                </v-list>
              
          </v-card-text>
        </v-slide-y-transition>

        <v-divider light></v-divider>
        <v-card-actions>
          <v-btn flat color="cyan darken-2">Share</v-btn>
          <v-btn flat color="cyan darken-2" @click="buttonClicked" >{{ buttonTitle }}</v-btn>
          <v-btn v-if="this.folder != this.selectedFolder" flat color="cyan darken-2" @click="buttonReturn">
            <v-icon class="white lighten-1 grey--text">reply</v-icon>
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    tag: String,
    folder: String
  },
  data() {
    return {
      show: false,
      buttonTitle: "EXPLORE",
      files: [],
      folders: [],
      selectedFolder: this.folder
    };
  },
  computed: {
    ...mapGetters(["helpInfo"])
  },
  methods: {
    loadContent() {
      // eslint-disable-next-line
      let s = `${this.helpInfo.api}contents/${this.helpInfo.path}${this.selectedFolder}`;
      this.files = [];
      this.folders = [];

      fetch(s)
        .then(res => res.json())
        .then(r => {
          r.forEach(v => {
            if (v.type == "file") {
              let ext = v.name.split(".").pop();
              let r = new RegExp("html?");
              if (r.test(ext)) {
                this.files.push(v.name);
              }
            } else if (v.type == "dir") {
              if (v.name != "img") {
                // eslint-disable-next-line
                this.folders.push(v.name);
              }
            }
          });
        });
    },
    buttonClicked() {
      this.show = !this.show;
      if (this.buttonTitle == "EXPLORE") this.buttonTitle = "COLLAPSE";
      else this.buttonTitle = "EXPLORE";
    },
    buttonReturn() {
      // eslint-disable-next-line
      this.selectedFolder = this.selectedFolder.substring(0, this.selectedFolder.lastIndexOf("/"));
    },
    fileSelect(v) {
      let s = `/help/${this.tag}/${this.selectedFolder}/${v}`;
      this.$router.push(s);
    },
    folderSelect(v) {
      this.selectedFolder = `${this.selectedFolder}/${v}`;
    },
    format(s) {
      /* remove dashes */
      let str = s.replace(new RegExp("_", "g"), " ");

      /* captialize */
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  watch: {
    tag: function() {
      this.loadContent();
    },
    selectedFolder: function() {
      this.loadContent();
    }
  },
  created: function() {
    this.loadContent();
  }
};
</script>

<style scoped>
</style>
