<template>
  <div v-if="tag !== null">
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
        <doc-element :element="i" :tag="tag"/><!-- recursion -->
      </div>

    </v-list-group>

  </div>
</template>

<script>
export default {
  name: "doc-element",
  props: {
    element: Object,
    tag: String
  },
  methods: {
    openHelp: function(e) {
      let s = `/doc/${this.tag}/${e}`;
      this.$router.push(s);
    },
    format(s) {
      let match,
        result = s;

      /* remove path: https://regex101.com/r/mDX9Rl/1 */
      match = /(.*)\/(.*)/.exec(result);
      if (match != null) result = match[2];

      /* remove file extension: https://regex101.com/r/L9UIMs/1 */
      match = /(.*)\.[^.]+$/.exec(result);
      if (match != null) result = match[1];

      /* remove dashes https://regex101.com/r/6ZSsJF/1 */
      result = result.replace(new RegExp("_", "g"), " ");

      /* captialize */
      result = result.charAt(0).toUpperCase() + result.slice(1);

      return result;
    },
    isFolder(path, folder) {
      let foldername = path;

      /* remove path: https://regex101.com/r/mDX9Rl/1 */
      let match = /(.*)\/(.*)/.exec(path);
      if (match != null) foldername = match[2];

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
