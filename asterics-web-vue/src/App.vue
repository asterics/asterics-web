<template>
  <v-app>
    <!-- <sidebar></sidebar>
    <navigation></navigation>

    <v-content>
      <v-container fluid>
        <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-content>-->
  </v-app>
</template>

<script>
import Navigation from "@/components/general/Navigation.vue";
import Sidebar from "@/components/general/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Sidebar
  }
};
</script>

<style scoped>
</style>
