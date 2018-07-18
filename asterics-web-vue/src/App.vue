<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="sticky-top py-3 shadow">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" class="mr-0 mr-lg-auto">
        <div class="brand">
          <font-awesome-icon icon="circle" size="2x"></font-awesome-icon>
          <img class="brand-logo" src="img/asterics-logo.svg" height="30" alt="AsTeRICS Logo">
          <span class="brand-title"> AsTeRICS Web</span>
        </div>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav-form class="form-inline">
          <b-input-group class="w-100 mx-lg-4 mt-4 mt-lg-0" style="display: flex; flex-flow: row nowrap;">
            <b-form-input class="mr-sm-0" type="text" placeholder="Search"></b-form-input>
            <div class="input-group-append">
              <b-button>
                <font-awesome-icon class="my-2 my-sm-0" icon="eraser"></font-awesome-icon>
              </b-button>
              <b-button class="my-0" type="submit">
                <font-awesome-icon icon="search" class="d-none d-lg-inline d-xl-none"></font-awesome-icon>
                <span class="d-lg-none d-xl-inline">Search</span>
              </b-button>
            </div>
          </b-input-group>
        </b-nav-form>

        <hr color="white" style="opacity: 0.4;" class="d-xl-none">


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto navigation-items">

          <b-nav-item-dropdown no-caret class="nobreak">
            <template slot="button-content">
              <font-awesome-icon class="" icon="universal-access" transform="up-2"></font-awesome-icon>
              Getting Started
            </template>
            <b-dropdown-item href="#">Model</b-dropdown-item>
            <b-dropdown-item href="#">Plugin</b-dropdown-item>
            <b-dropdown-item href="#">AT Solution</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown no-caret>
            <template slot="button-content">
              <font-awesome-icon class="d-lg-none" icon="book" transform="up-2"></font-awesome-icon>
              Documentation
            </template>
            <b-dropdown-item href="#">ARE</b-dropdown-item>
            <b-dropdown-item href="#">ACS</b-dropdown-item>
            <b-dropdown-item href="#">Model</b-dropdown-item>
            <b-dropdown-item href="#">Plugin</b-dropdown-item>
            <b-dropdown-item href="#">Training</b-dropdown-item>
            <b-dropdown-item href="#">AT Solution</b-dropdown-item>
            <b-dropdown-item href="#">API</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown no-caret>
            <template slot="button-content">
              <font-awesome-icon class="d-lg-none" icon="question-circle" transform="up-2"></font-awesome-icon>
              Support
            </template>
            <b-dropdown-item href="#">Forum</b-dropdown-item>
            <b-dropdown-item href="#">Contact</b-dropdown-item>
            <b-dropdown-item href="#">Issues</b-dropdown-item>
            <b-dropdown-item href="#">Stack Overflow</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#">
            <font-awesome-icon class="d-lg-none" icon="download" transform="up-2"></font-awesome-icon>
            Download
          </b-nav-item>

          <b-nav-item href="#">
            <font-awesome-icon class="d-lg-none" :icon="['fab', 'wordpress']" transform="up-2"></font-awesome-icon>
            Blog
          </b-nav-item>

          <b-nav-item-dropdown no-caret>
            <template slot="button-content">
              <font-awesome-icon class="d-lg-none" icon="code" transform="up-2"></font-awesome-icon>
              Develop
            </template>
            <b-dropdown-item href="#">Model</b-dropdown-item>
            <b-dropdown-item href="#">Plugin</b-dropdown-item>
            <b-dropdown-item href="#">AT Solution</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#" class="nobreak">
            <font-awesome-icon :icon="['fab', 'github']" transform="up-2"></font-awesome-icon>
            GitHub
          </b-nav-item>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </div>
      </div>
    </div>

    
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
@import url("https://fonts.googleapis.com/css?family=Gaegu");

.brand {
  position: relative;
  /* width: 10px;
  height: 10px; */
}

.brand-title {
  font-family: "Gaegu", cursive;
  font-size: 1.5em;
}

.brand-logo {
  position: absolute;
  top: 10px;
  left: 5px;
}

nav.navbar.sticky-top {
  margin-bottom: 2%;
}

.nobreak {
  white-space: nowrap;
}
@media (max-width: 990px) {
  .navigation-items {
    padding-left: 10px;
    font-size: 1.25em;
    width: 100%;
  }
}
</style>
