<template>
  <!-- <v-select class="btn-info" v-if="tags" v-model="tags[0]" :options="tags"></v-select> -->
  <!-- <b-dropdown :text="tags[selected]" class="m-md-2">
    <div v-for="tag in tags" :key="tag">
      <b-dropdown-item @onclick="select(tag)">{{tag}}</b-dropdown-item>
    </div>
  </b-dropdown> -->
  <div>

    <v-container fluid>

        <v-layout row wrap align-center>

          <v-flex xs6>
            <v-select
              v-if="tags"
              :items="tags"
              v-model="selection"
              label="Select"
              solo single-line>
          </v-select>

          </v-flex>

        </v-layout>

    </v-container>

  </div>
</template>

<script>
import { loadTags } from "@/libraries/util/help.js";

export default {
  data() {
    return {
      tags: null,
      selection: "latest"
    };
  },
  beforeCreate: function() {
    loadTags().then(r => {
      this.tags = r;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
