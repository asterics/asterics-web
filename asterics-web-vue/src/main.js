import Vue from "vue";
import router from "@/libraries/router";
import store from "@/libraries/store";

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// FontAwesome
import "@/libraries/icons";

// Components
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
