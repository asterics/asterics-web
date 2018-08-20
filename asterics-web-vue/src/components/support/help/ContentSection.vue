<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">{{ folder }}</div>
        </v-card-title>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Hallo: {{ tag }}

            <v-layout row wrap>
              <v-layout row wrap>
                <v-flex xs12 lg4 v-for="file in files" :key="file">
                  <v-card color="cyan darken-2" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline">{{ file }}</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-layout>
              
          </v-card-text>
        </v-slide-y-transition>

        <v-divider light></v-divider>
        <v-card-actions>
          <v-btn flat color="cyan darken-2">Share</v-btn>
          <v-btn flat color="cyan darken-2" @click="show = !show">Explore</v-btn>
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
      files: ["one", "two", "three"]
    };
  },
  computed: {
    ...mapGetters(["helpInfo"])
  },
  methods: {
    loadContent() {
      let s = `${this.helpInfo.help_path}${this.folder}`;
      // console.log(s);
      fetch(s)
        .then(res => res.json())
        .then(r => {
          r.forEach(v => {
            if (v.type == "file") {
              console.log(`${this.folder}: ${v.name}`);
            }
          });
        });
      // console.log(this.helpInfo.help_path);
    }
  },
  created: function() {
    this.loadContent();
  }
};
</script>

<style scoped>
</style>
