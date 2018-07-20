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
        <div v-for="item in navitems" :key="item">
          <navigation-item :item="item" class="nobreak"></navigation-item>
        </div>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
import Brand from "@/components/general/navigation/Brand.vue";
import Searchbar from "@/components/general/navigation/Searchbar.vue";
import NavigationItem from "@/components/general/navigation/NavigationItem.vue";

export default {
  data() {
    return {
      // TODO: Implement data ev. in/with vuex
      navitems: [
        {
          label: "Getting Started",
          link: "#",
          icon: "universal-access",
          dropdown: [
            { label: "Model", link: "#/getting-started/model/" },
            { label: "Plugin", link: "#/getting-started/plugin/" },
            { label: "AT Solution", link: "#/getting-started/at-solution/" }
          ]
        },
        {
          label: "Documentation",
          link: "#",
          icon: "book",
          // TODO: Implement utility property, e.g. display: ["permanent", "lg"] setting component accordingly.
          // Current implementation passes only class.
          icon_display: "d-lg-none",
          dropdown: [
            { label: "ARE", link: "#" },
            { label: "ACS", link: "#" },
            { label: "Model", link: "#" },
            { label: "Plugin", link: "#" },
            { label: "Training", link: "#" },
            { label: "AT Solution", link: "#" },
            { label: "API", link: "#" }
          ]
        },
        {
          label: "Support",
          link: "#",
          icon: "question-circle",
          icon_display: "d-lg-none",
          dropdown: [
            { label: "Forum", link: "#" },
            { label: "Contact", link: "#" },
            { label: "Issues", link: "#" },
            { label: "Stack Overflow", link: "#" }
          ]
        },
        {
          label: "Download",
          link: "#",
          icon: "download",
          icon_display: "d-lg-none"
        },
        {
          label: "Blog",
          link: "#",
          icon: ["fab", "wordpress"],
          icon_display: "d-lg-none"
        },
        {
          label: "Develop",
          link: "#",
          icon: "code",
          icon_display: "d-lg-none",
          dropdown: [
            { label: "Model", link: "#" },
            { label: "Plugin", link: "#" },
            { label: "AT Solution", link: "#" }
          ]
        },
        { label: "GitHub", link: "#", icon: ["fab", "github"] }
      ]
    };
  },
  components: {
    Brand,
    Searchbar,
    NavigationItem
  },
  props: {},
  methods: {}
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
