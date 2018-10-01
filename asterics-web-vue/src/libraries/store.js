import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    github: {
      api: {
        repos: "https://api.github.com/repos",
        raw: "https://raw.githubusercontent.com",
        rate_limit: "https://api.github.com/rate_limit"
      },
      AsTeRICS: {
        path: "asterics/AsTeRICS",
        acs_help: "Documentation/ACS-Help",
        acs_help_docs: "HTML"
      }
    },
    webapp: {
      navigation: {
        items: [
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
              { label: "Model", link: "#/webacs" },
              { label: "Plugin", link: "#" },
              { label: "AT Solution", link: "#" }
            ]
          },
          { label: "GitHub", link: "#", icon: "fab fa-github" }
        ]
      },
      sidebar: {
        visible: true
      },
      content: {
        webacs: {
          visible: false
        }
      }
    }
  },
  mutations: {
    updateSidebarVisibility(state, value) {
      state.webapp.sidebar.visible = value;
    },
    setWebACSVisibility(state, value) {
      state.webapp.content.webacs.visible = value;
    }
  },
  actions: {},
  getters: {
    github: s => s.github,
    webapp: s => s.webapp
  }
});
