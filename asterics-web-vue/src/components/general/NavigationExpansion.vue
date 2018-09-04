<template>
  <nav>
    <v-fab-transition>
      <v-btn
        v-show="!sidebar.visible && !expansion"
        color="secondary" fab dark fixed bottom right @click="toggleSidebar">
        <v-icon large>swap_horiz</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-expansion-panel v-model="expansion" dark> 
      <v-expansion-panel-content class="primary" @input="expansionPanelState($event)">
        
        <div slot="header" style="font-size: 1.35em; font-weight: 450;">
          AsTeRICS Web
        </div>

        <v-btn flat href="/" class="bttn">
          <v-icon left dark small>home</v-icon>Home<v-spacer/>
        </v-btn>
        
        <div v-for="n in navigationItems" :key="n.label" class="cntr">
          <v-menu v-if="n.hasOwnProperty('dropdown')" class="bttn" offset-y>
            <v-btn slot="activator" class="bttn" flat>
              <v-icon left dark small>{{ n.icon }}</v-icon>{{ n.label }}<v-spacer/></v-btn>

            <v-list>
              <v-list-tile
                v-for="d in n.dropdown" :key="d.label" @click=";" :href="d.link"
              >
                <v-list-tile-title @click="hideNavigation">{{ d.label }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn v-else flat :href="n.link" class="bttn" @click="hideNavigation">
            <v-icon left dark small>{{ n.icon }}</v-icon>{{ n.label }}<v-spacer/>
          </v-btn>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      expansion: null
    };
  },
  computed: {
    ...mapGetters(["navigationItems", "sidebar"])
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("sidebarVisible", !this.sidebar.visible);
    },
    hasDropdown: function(v) {
      return v.hasOwnProperty("dropdown");
    },
    expansionPanelState(v) {
      // this.expansion = v;
      if (v) this.expansion = 0;
      else this.expansion = null;
    },
    hideNavigation() {
      this.expansion = null;
    }
  }
};
</script>

<style scoped>
.cntr {
  padding: 0px;
  margin: 0px;
}
.bttn {
  width: 100%;
}
</style>
