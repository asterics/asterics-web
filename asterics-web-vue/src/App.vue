<template>
  <div>
    <navigation/>
    <div class="container">
      <sidebar/>
      <main-content/>
    </div>
  </div>
</template>

<script>
import navigation from "@/components/general/navigation.vue";
import sidebar from "@/components/general/sidebar.vue";
import mainContent from "@/components/general/mainContent.vue";

export default {
  name: "App",
  components: {
    navigation,
    sidebar,
    mainContent
  }
};
</script>

<style scoped>
div {
  border: solid 1px green;
}
</style>
