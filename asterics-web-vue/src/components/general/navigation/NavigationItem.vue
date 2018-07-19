<template>
    <!-- display element with dropdown -->
    <b-nav-item-dropdown v-if="this.hasdropdown" no-caret>
      <template slot="button-content">
        <font-awesome-icon :class="this.item.icon_display" :icon="this.item.icon" transform="up-2"></font-awesome-icon>
        {{ this.item.label }}
      </template>
      <b-dropdown-item v-for="d in this.item.dropdown" :key="d" :href="d.link">{{ d.label }}</b-dropdown-item>
    </b-nav-item-dropdown>

    <!-- or without -->
    <b-nav-item v-else :href="this.item.link">
      <font-awesome-icon :class="this.item.icon_display" :icon="this.item.icon" transform="up-2"></font-awesome-icon>
      {{ this.item.label }}
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
</style>
