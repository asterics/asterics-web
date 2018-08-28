<template>
    <v-navigation-drawer app clipped :value="sidebar.visible" @input="onTransitioned($event)">
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
import { listToTree } from "@/libraries/util/help.js";

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
      tag: "v3.0.1", // FIXME: Get latest tag automatically
      tree: []
    };
  },
  computed: {
    ...mapGetters(["helpInfo", "sidebar"])
  },
  methods: {
    onTransitioned(v) {
      this.$store.commit("sidebarVisible", v);
    },
    updateTag(v) {
      this.tag = v;

      /* push new route if necessary */
      // eslint-disable-next-line
      if (this.$route.name == "documentation content" && this.$route.params[0] != v) {
        let s = `/doc/${v}/${this.$route.params[1]}/${this.$route.params[2]}`;
        this.$router.push(s);
      }
    },
    loadContent() {
      // eslint-disable-next-line
      let p = `${this.helpInfo.api}contents/${this.helpInfo.acs_help}?ref=${this.tag}`;
      fetch(p)
        .then(r => r.json())
        .then(r => {
          /* get folder `HTML` */
          let folderHTML = r.filter(el => {
            return el.name === "HTML";
          });

          /* get tree of folder `HTML` */
          if (folderHTML.length == 1) {
            // eslint-disable-next-line
            let t = `${this.helpInfo.api}git/trees/${folderHTML[0].sha}?recursive=1`;
            fetch(t)
              .then(r => r.json())
              .then(r => {
                /* convert flat array to tree */
                this.tree = listToTree(r.tree);
              });
          }
        });
    }
  },
  created: function() {
    this.loadContent();
  },
  watch: {
    tag() {
      this.loadContent();
    }
  }
};
</script>

<style scoped>
</style>
