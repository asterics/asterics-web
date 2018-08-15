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
    primary: colors.cyan.lighten2,
    secondary: colors.cyan.darken2,
    accent: colors.blue.darken3,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
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
