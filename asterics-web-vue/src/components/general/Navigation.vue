<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="sticky-top py-3 shadow">
    
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <!-- Brand -->
    <brand></brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- Searchbar -->
      <searchbar placeholder="Search">
        <b-button>
          <font-awesome-icon class="my-2 my-sm-0" icon="eraser"></font-awesome-icon>
        </b-button>
        <b-button class="my-0" type="submit">
          <font-awesome-icon icon="search" class="d-none d-lg-inline d-xl-none"></font-awesome-icon>
          <span class="d-lg-none d-xl-inline">Search</span>
        </b-button>
      </searchbar>

      <!-- Horizontal Rule -->
      <hr color="white" class="nav-divider d-xl-none">

      <!-- Navigation Itmes (right aligned) -->
      <b-navbar-nav class="ml-auto navigation-items">
        <div v-for="item in navigationItems"  :key="item.label">
          <navigation-item :item="item" class="nobreak"></navigation-item>
        </div>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import Brand from "@/components/general/navigation/Brand.vue";
import Searchbar from "@/components/general/navigation/Searchbar.vue";
import NavigationItem from "@/components/general/navigation/NavigationItem.vue";

export default {
  components: {
    Brand,
    Searchbar,
    NavigationItem
  },
  computed: {
    ...mapGetters(["navigationItems"])
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Gaegu");

nav.navbar.sticky-top {
  margin-bottom: 2%;
}

.nav-divider {
  opacity: 0.4;
  height: 4px;
}

@media (max-width: 990px) {
  .navigation-items {
    padding-left: 10px;
    font-size: 1.25em;
    width: 100%;
  }
}
</style>
