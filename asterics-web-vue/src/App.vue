<template>
  <v-app>

    <sidebar :visible="sidebarVisibility" @onStatusSidebarChanged="setToggleSidebar($event)"></sidebar>
    <navigation @toggleSidebar="onToggleSidebar"></navigation>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

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
  },
  data() {
    return {
      sidebarVisibility: false
    };
  },
  methods: {
    onToggleSidebar: function() {
      this.sidebarVisibility = !this.sidebarVisibility;
    },
    setToggleSidebar: function(e) {
      this.sidebarVisibility = e;
    }
  }
};
</script>

<style scoped>
</style>
