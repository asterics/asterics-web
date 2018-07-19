<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
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
