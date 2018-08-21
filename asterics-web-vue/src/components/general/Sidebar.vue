<template>
  <!-- eslint-disable-next-line -->
  <v-navigation-drawer :value="visible" @input="onTransitioned($event)" clipped app>
    <router-view name="sidebar"/>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  methods: {
    onTransitioned: function(e) {
      this.$emit("onStatusSidebarChanged", e);
    }
  }
};
</script>

<style scoped>
</style>
