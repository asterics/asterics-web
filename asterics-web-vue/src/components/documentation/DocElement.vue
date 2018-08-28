<template>
  <div>
    <!-- Files -->
    <v-list-tile v-if="element.type=='blob' && isHTML(element.path)" slot="activator" @click="openHelp(element.path)">
      <v-list-tile-title>{{format(element.path)}}</v-list-tile-title>
    </v-list-tile>

    <!-- Folders -->
    <!-- PRESENT: toggle no-action -->
    <v-list-group v-else-if="element.type=='tree' && !isFolder(element.path, 'img')" sub-group no-action>

      <v-list-tile slot="activator">
        <v-list-tile-title >{{format(element.path)}}</v-list-tile-title>
      </v-list-tile>

      <div v-for="i in element.children" :key="i.sha">
        <doc :element="i" :tag="tag"/>
      </div>

    </v-list-group>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "doc", // recursively used component <doc/>
  computed: {
    ...mapGetters(["helpInfo"])
  },
  props: {
    element: Object,
    tag: String
  },
  methods: {
    openHelp(e) {
      let s = `/doc/${this.tag}/${e}`;
      this.$router.push(s);
    },
    format(s) {
      /* remove path */
      let r = /(.*)\/(.*)/.exec(s);
      if (r == null) r = s;
      else r = r[2];

      /* remove file extension */
      let i = /(.*)\.[^.]+$/.exec(r);
      if (i == null) i = r;
      else i = i[1];

      /* remove dashes */
      let str = i.replace(new RegExp("_", "g"), " ");

      /* captialize */
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    isFolder(path, folder) {
      let foldername;
      /* remove path */
      let r = /(.*)\/(.*)/.exec(path);
      if (r == null) foldername = path;
      else return (foldername = r[2]);
      return foldername === folder;
    },
    isHTML(path) {
      return /.html?$/.test(path);
    }
  }
};
</script>

<style scoped>
</style>
