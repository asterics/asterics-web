<template>
    <!-- display element with dropdown -->
    <b-nav-item-dropdown v-if="this.hasdropdown" no-caret>
      <template slot="button-content">
        <font-awesome-icon :class="this.item.icon_display" :icon="this.item.icon" transform="up-2"></font-awesome-icon>
        <span class="navigation-item"> {{ this.item.label }}</span>
      </template>
      <b-dropdown-item v-for="d in this.item.dropdown" :key="d.label" :href="d.link">{{ d.label }}</b-dropdown-item>
    </b-nav-item-dropdown>

    <!-- or without -->
    <b-nav-item v-else :href="this.item.link">
      <font-awesome-icon :class="this.item.icon_display" :icon="this.item.icon" transform="up-2"></font-awesome-icon>
      <span class="navigation-item"> {{ this.item.label }}</span>
    </b-nav-item>

</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasdropdown() {
      return this.item.hasOwnProperty("dropdown");
    }
  }
};
</script>

<style scoped>
.nobreak {
  white-space: nowrap;
}
/*
.navigation-item {
  TODO: Implement hover effects: https://codepen.io/anon/pen/BPQQZg
  text-transform: uppercase;
  padding: 4px;
}
*/
</style>
