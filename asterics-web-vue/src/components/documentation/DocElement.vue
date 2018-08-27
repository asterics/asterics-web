<template>
  <div>
    <v-list-tile v-if="element.node.type=='file'" slot="activator" @click="openHelp(element.node)">
      <v-list-tile-title>{{format(element.node.name)}}</v-list-tile-title>
    </v-list-tile>

    <!-- PRESENT: toggle no-action -->
    <v-list-group v-else-if="element.node.type=='dir' && element.node.name != 'img'" sub-group no-action>

      <v-list-tile slot="activator">
        <v-list-tile-title >{{format(element.node.name)}}</v-list-tile-title>
      </v-list-tile>

      <div v-for="i in element.contents" :key="i.node.name">
        <doc :element="i"/>
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
    element: Object
  },
  methods: {
    openHelp(e) {
      let t = /ref=(.*)/.exec(e.url)[1];
      let p = e.path.replace(this.helpInfo.path, "").replace(e.name, "");

      let s = `/doc/${t}${p}${e.name}`;
      this.$router.push(s);
    },
    format(s) {
      /* remove file extension */
      let i = /(.*)\.[^.]+$/.exec(s);
      if (i == null) i = s;
      else i = i[1];

      /* remove dashes */
      let str = i.replace(new RegExp("_", "g"), " ");

      /* captialize */
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
};
</script>

<style scoped>
</style>
