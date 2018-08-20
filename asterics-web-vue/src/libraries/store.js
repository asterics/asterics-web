import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigationItems: [
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
          { label: "Help", link: "#/help" },
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
    ],
    helpInfo: {
      api: "https://api.github.com/repos/asterics/AsTeRICS/",
      raw: "https://raw.githubusercontent.com/asterics/AsTeRICS/",
      path: "Documentation/ACS-Help/HTML/",
      tags: "https://api.github.com/repos/asterics/AsTeRICS/tags/",
      sections: ["Plugins", "ACS", "ARE"]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    navigationItems: s => s.navigationItems,
    helpInfo: s => s.helpInfo
  }
});
