<template>
  <v-app>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <navigation></navigation>

    <div class="container">
      <div class="row">

        <div class="col-3 d-none d-md-inline">
          <sidebar></sidebar>
        </div>

        <div class="col-12 col-md-9">
          <main-content></main-content>
        </div>

      </div>
    </div>
  </v-app>
</template>

<script>
import Navigation from "@/components/general/Navigation.vue";
import Sidebar from "@/components/general/Sidebar.vue";
import MainContent from "@/components/general/MainContent.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Sidebar,
    MainContent
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
