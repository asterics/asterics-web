<template>
  <div>
    <navigation-toolbar class="hidden-sm-and-down"></navigation-toolbar>
    <navigation-expansion class="hidden-md-and-up"></navigation-expansion>
  </div>
</template>

<script>
import NavigationToolbar from "@/components/general/NavigationToolbar.vue";
import NavigationExpansion from "@/components/general/NavigationExpansion.vue";

export default {
  components: {
    NavigationToolbar,
    NavigationExpansion
  }
};
</script>

<style scoped>
</style>
