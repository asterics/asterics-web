import Vue from "vue";
import Router from "vue-router";

import Welcome from "@/components/welcome/Welcome";

import GettingStarted from "@/components/getting-started/GettingStarted";
import GettingStartedModel from "@/components/getting-started/Model";
import GettingStartedPlugin from "@/components/getting-started/Plugin";
import GettingStartedATSolution from "@/components/getting-started/ATSolution";
import Help from "@/components/support/Help";
import HelpContent from "@/components/support/help/HelpContent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      // FIXME: button click not possible due to simultaneous collapse event handling
      path: "/getting-started",
      name: "getting-started",
      component: GettingStarted
    },
    {
      path: "/getting-started/model",
      name: "getting-started-model",
      component: GettingStartedModel
    },
    {
      path: "/getting-started/plugin",
      name: "getting-started-plugin",
      component: GettingStartedPlugin
    },
    {
      path: "/getting-started/at-solution",
      name: "getting-started-at-solution",
      component: GettingStartedATSolution
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    /* FIXME: add path for tag -> map to selection (dropdown)*/
    {
      /* FIXME: does every html have to be inside folder? if not, change regex to opt. */
      path: "/help/(.*?)/(.*)/(.*[.]html?)",
      name: "help content",
      component: HelpContent
    }
  ]
});
