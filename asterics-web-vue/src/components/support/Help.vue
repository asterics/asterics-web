<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs6>
        <version-button @clicked="onTagSelected"></version-button>
      </v-flex>
    
    </v-layout>
    <div v-for="section in helpInfo.sections" :key="section">
      <content-section :tag="tag" :folder="section"></content-section>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import VersionButton from "@/components/support/help/VersionButton.vue";
import ContentSection from "@/components/support/help/ContentSection.vue";

export default {
  data() {
    return {
      tag: "v3.0.1" // FIXME: Get latest tag automatically
    };
  },
  computed: {
    ...mapGetters(["helpInfo"])
  },
  components: {
    VersionButton,
    ContentSection
  },
  methods: {
    onTagSelected(v) {
      this.tag = v;
    }
  }
};
</script>

<style scoped>
</style>
