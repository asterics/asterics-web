<template>
  <v-select
      v-if="tags"
      :items="tags"
      v-model="selection"
      label="Select Version"
      solo single-line>
  </v-select>
</template>

<script>
import { mapGetters } from "vuex";
import { loadGitTags } from "@/libraries/util/github.js";

export default {
  data() {
    return {
      tags: null,
      repo_help_content: null,
      selection: null
    };
  },
  computed: {
    ...mapGetters(["github"])
  },
  beforeMount: function() {
    let api = this.github.api.repos,
      repo = this.github.AsTeRICS.path;

    loadGitTags(`${api}/${repo}`).then(r => {
      this.tags = r;
    });
  },
  watch: {
    selection: function(newSelection) {
      this.$emit("clicked", newSelection);
    }
  }
};
</script>

<style scoped>
</style>
