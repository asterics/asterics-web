import Vue from "vue";
import router from "@/libraries/router";
import store from "@/libraries/store";

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
