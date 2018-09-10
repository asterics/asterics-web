<template>
    <v-navigation-drawer app clipped :value="webapp.sidebar.visible" @input="onTransitioned($event)">
      <rate-limit></rate-limit>
      <doc-tag-select @clicked="updateTag"></doc-tag-select>
      <v-list dense>
        <v-list-group v-for="f in tree" :key="f.sha" v-if="f.type=='tree' && f.path != 'stylesheet'">

          <v-list-tile slot="activator">
            <v-list-tile-title>{{f.path}}</v-list-tile-title>
          </v-list-tile>

          <div v-for="e in f.children" :key="e.sha">
            <doc-element :element="e" :tag="tag"></doc-element>
          </div>

        </v-list-group>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import {
  loadGitTags,
  loadGitContent,
  loadGitTree,
  unfoldGitTree
} from "@/libraries/util/github.js";

import DocTagSelect from "@/components/documentation/DocTagSelect.vue";
import DocElement from "@/components/documentation/DocElement.vue";
import RateLimit from "@/components/documentation/RateLimit.vue";

export default {
  components: {
    DocTagSelect,
    DocElement,
    RateLimit
  },
  data() {
    return {
      tag: null,
      tree: []
    };
  },
  computed: {
    ...mapGetters(["github", "webapp"])
  },
  methods: {
    onTransitioned: function(v) {
      this.$store.commit("updateSidebarVisibility", v);
    },
    updateTag: function(tagSelected) {
      this.tag = tagSelected;

      /* check if documentation content is displayed currently */
      if (this.$route.name === "documentation content") {
        /* check if tag was changed */
        let rtag = this.$route.params[0];
        if (rtag !== tagSelected) {
          /* push new route */
          let rpath = this.$route.params[1],
            rfilename = this.$route.params[2];

          let newRoute = `/doc/${tagSelected}/${rpath}/${rfilename}`;
          this.$router.push(newRoute);
        }
      }
    },
    loadContent: function() {
      let api = this.github.api.repos,
        repo = this.github.AsTeRICS.path,
        folder = this.github.AsTeRICS.acs_help;

      let url = `${api}/${repo}`;

      loadGitContent(url, folder, this.tag).then(r => {
        /* get folder containing documentation */
        let docFolder = r.filter(el => {
          return el.name == this.github.AsTeRICS.acs_help_docs;
        });

        if (docFolder.length == 1) {
          /* get tree of documentation folder */
          let sha = docFolder[0].sha;

          loadGitTree(url, sha).then(r => {
            this.tree = unfoldGitTree(r.tree);
          });
        }
      });
    }
  },
  created: function() {
    let api = this.github.api.repos,
      repo = this.github.AsTeRICS.path;

    loadGitTags(`${api}/${repo}`).then(r => {
      /* get most recent tag */
      r.sort().reverse();
      this.tag = r[0];
    });
  },
  watch: {
    tag: function() {
      // if (newTag !== oldTag) {
      this.loadContent();
      // }
    }
  }
};
</script>

<style scoped>
</style>
