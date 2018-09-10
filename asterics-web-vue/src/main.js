import Vue from "vue";
import router from "@/libraries/router";
import store from "@/libraries/store";

// Vuetify
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
Vue.use(Vuetify, {
  iconfont: "fa",
  theme: {
    primary: colors.cyan.darken1,
    secondary: colors.cyan.lighten2,
    accent: colors.blue.darken3,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
});

// Components
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
