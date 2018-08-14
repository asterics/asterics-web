import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
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
