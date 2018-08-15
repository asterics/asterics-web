import Vue from "vue";
import router from "@/libraries/router";
import store from "@/libraries/store";

// Vuetify
import "vuetify/dist/vuetify.min.css";
// import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1,
    secondary: colors.red.darken1,
    accent: colors.red.darken1
  }
});

// Bootstrap
import "@/libraries/bootstrap";

// FontAwesome
import "@/libraries/icons";

// Components
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
