<template>
  <v-select
      v-if="tags"
      :items="tags"
      v-model="selection"
      label="Select"
      solo single-line>
  </v-select>
</template>

<script>
import { loadTags } from "@/libraries/util/help.js";

export default {
  data() {
    return {
      tags: null,
      repo_help_content: null,
      selection: null
    };
  },
  beforeCreate: function() {
    loadTags().then(r => {
      this.tags = r;
    });
  },
  watch: {
    selection: function(v) {
      this.$emit("clicked", v);
      // fetch(`${this.dir_help_content.path}?ref=${v}`)
      //   .then(r => r.json())
      //   .then(o => {
      //     this.repo_help_content = o;
      //   });
    }
  }
};
</script>

<style scoped>
</style>
