<template>
    <v-navigation-drawer>
      <v-list>

        <v-list-group v-for="f in tree" :key="f.folder">

          <v-list-tile slot="activator">
            <v-list-tile-title>{{f.folder}}</v-list-tile-title>
          </v-list-tile>

          <div v-for="e in f.content" :key="e.node.name">
            <doc-element :element="e"></doc-element>
          </div>

        </v-list-group>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import { getContent } from "@/libraries/util/help.js";
import DocElement from "@/components/documentation/DocElement.vue";

export default {
  components: {
    DocElement
  },
  data() {
    return {
      tree: []
    };
  },
  computed: {
    ...mapGetters(["helpInfo"])
  },
  methods: {
    loadContent() {
      let tag = "v3.0";

      this.helpInfo.sections.forEach(v => {
        // eslint-disable-next-line
        let url = `${this.helpInfo.api}contents/${this.helpInfo.path}${v}?ref=${tag}`;
        getContent(url).then(r => {
          let c = { folder: v, content: r };
          this.tree.push(c);
        });
      });
    }
  },
  created: function() {
    this.loadContent();
  }
};
</script>

<style scoped>
</style>
