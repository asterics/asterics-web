<template>
    <v-navigation-drawer>
      <rate-limit></rate-limit>
      <doc-tag-select @clicked="updateTag"></doc-tag-select>
      <v-list>
        <v-list-group v-for="f in tree" :key="f.node.name">

          <v-list-tile slot="activator">
            <v-list-tile-title>{{f.node.name}}</v-list-tile-title>
          </v-list-tile>

          <div v-for="e in f.contents" :key="e.node.name">
            <doc-element :element="e"></doc-element>
          </div>

        </v-list-group>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import { getContent } from "@/libraries/util/help.js";

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
    ...mapGetters(["helpInfo"])
  },
  methods: {
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
      this.tree = [];

      // eslint-disable-next-line
      let p = `${this.helpInfo.api}contents/${this.helpInfo.path}`;
      let urlHelpFolder = `${p}?ref=${this.tag}`;

      fetch(urlHelpFolder)
        .then(r => r.json())
        .then(r => {
          if (!r.hasOwnProperty("message")) {
            r.forEach(e => {
              if (e.type == "dir" && e.name != "stylesheet") {
                // eslint-disable-next-line
                let url = `${p}/${e.name}?ref=${this.tag}`;
                getContent(url).then(r => {
                  let c = { node: e, contents: r };
                  this.tree.push(c);
                });
              }
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
