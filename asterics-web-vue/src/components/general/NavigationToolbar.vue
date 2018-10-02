<template>
  <v-toolbar color="primary" :clipped-left="$vuetify.breakpoint.lgAndUp" dark fixed app>
    <v-toolbar-side-icon @click.stop="toggleSidebar"></v-toolbar-side-icon>

    <v-toolbar-title><button style="outline: none;" @click="$router.push('/')">AsTeRICS Web</button></v-toolbar-title>
   
    <v-spacer></v-spacer>

    <v-toolbar-items v-for="n in webapp.navigation.items" :key="n.label" class="hidden-sm-and-down">

      <v-menu v-if="hasDropdown(n)" offset-y>
        <v-btn slot="activator" class="" flat>
          <v-icon left dark small>{{ n.icon }}</v-icon>
          {{ n.label }}
        </v-btn>

        <v-list>
          <v-list-tile v-for="d in n.dropdown" :key="d.label" @click=";" :href="d.link" :target="d.target">
            <v-list-tile-title>{{ d.label }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    <v-btn v-else flat :href="n.link">
      <v-icon left dark small>{{ n.icon }}</v-icon>
      {{ n.label }}
    </v-btn>

    </v-toolbar-items>
  </v-toolbar>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["webapp"])
  },
  methods: {
    toggleSidebar: function() {
      let v = !this.webapp.sidebar.visible;
      this.$store.commit("updateSidebarVisibility", v);
    },
    hasDropdown: function(v) {
      return v.hasOwnProperty("dropdown");
    },
    routeHome: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
