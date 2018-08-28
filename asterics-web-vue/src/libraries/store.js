import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigationItems: [
      {
        label: "Getting Started",
        link: "#",
        icon: "fa-universal-access",
        dropdown: [
          { label: "Model", link: "#/getting-started/model/" },
          { label: "Plugin", link: "#/getting-started/plugin/" },
          { label: "AT Solution", link: "#/getting-started/at-solution/" }
        ]
      },
      { label: "Documentation", link: "#/doc", icon: "fa-book" },
      {
        label: "Support",
        link: "#",
        icon: "fa-question-circle",
        dropdown: [
          { label: "Forum", link: "#" },
          { label: "Contact", link: "#" },
          { label: "Issues", link: "#" },
          { label: "Stack Overflow", link: "#" }
        ]
      },
      { label: "Download", link: "#", icon: "fa-download" },
      { label: "Blog", link: "#", icon: "fab fa-wordpress" },
      {
        label: "Develop",
        link: "#",
        icon: "fa-code",
        dropdown: [
          { label: "Model", link: "#" },
          { label: "Plugin", link: "#" },
          { label: "AT Solution", link: "#" }
        ]
      },
      { label: "GitHub", link: "#", icon: "fab fa-github" }
    ],
    helpInfo: {
      api: "https://api.github.com/repos/asterics/AsTeRICS/",
      raw: "https://raw.githubusercontent.com/asterics/AsTeRICS/",
      acs_help: "Documentation/ACS-Help",
      path: "Documentation/ACS-Help/HTML",
      tags: "https://api.github.com/repos/asterics/AsTeRICS/tags/",
      rate_limit: "https://api.github.com/rate_limit"
      // sections: ["Plugins", "ACS", "ARE"]
    },
    sidebar: {
      visible: true
    }
  },
  mutations: {
    sidebarVisible(state, value) {
      state.sidebar.visible = value;
    }
  },
  actions: {},
  getters: {
    navigationItems: s => s.navigationItems,
    helpInfo: s => s.helpInfo,
    sidebar: s => s.sidebar
  }
});
