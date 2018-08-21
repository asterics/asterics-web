<template>
  <v-layout>
    <v-flex xs12>

      <v-list dense subheader>
          <v-subheader>Folder</v-subheader>
          <v-list-tile @click=";">
            <v-list-tile-content>
              <v-list-tile-title>Docu</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click=";">
            <v-list-tile-content>
              <v-list-tile-title>Show your status</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      root: {}
    };
  },
  computed: {
    ...mapGetters(["helpInfo"])
  }
};
</script>

<style scoped>
</style>
