<template>
  <v-app>

    <sidebar></sidebar>
    <navigation></navigation>

    <v-content>
      <v-container :class="{ 'webacs': webapp.content.webacs.visible }" fluid>
        <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import Navigation from "@/components/general/Navigation.vue";
import Sidebar from "@/components/general/Sidebar.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navigation,
    Sidebar
  },
  computed: {
    ...mapGetters(["webapp"])
  },
  watch: {
    $route() {
      if (this.$route.path === "/webacs") {
        this.$store.commit("setWebACSVisibility", true);
      } else {
        this.$store.commit("setWebACSVisibility", false);
      }
    }
  }
};
</script>

<style scoped>
.webacs {
  height: 100%;
  padding: 0;
  /* zoom: 1.25;
  -moz-transform: scale(3);
  -moz-transform-origin: 0 0; */
}
</style>
