import Vue from "vue";
import router from "@/libraries/router";
import store from "@/libraries/store";

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line
import {
  faCircle,
  faBook,
  faCode,
  faEraser,
  faQuestionCircle,
  faUniversalAccess,
  faDownload,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWordpress } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
library.add(
  faCircle,
  faBook,
  faCode,
  faEraser,
  faQuestionCircle,
  faUniversalAccess,
  faDownload,
  faSearch,
  faGithub,
  faWordpress
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

// Components
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
