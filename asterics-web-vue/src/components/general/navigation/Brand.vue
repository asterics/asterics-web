<template>
  <!-- TODO: check necessity for parametrization!? -->
  <b-navbar-brand href="#" class="mr-0 mr-lg-auto">
    <div class="brand">
      <font-awesome-icon icon="circle" size="2x"></font-awesome-icon>
      <img class="brand-logo" src="img/asterics-logo.svg" height="30" alt="AsTeRICS Logo">
      <span class="brand-title"> AsTeRICS Web</span>
    </div>
  </b-navbar-brand>
</template>

<script>
export default {};
</script>

<style scoped>
.brand {
  position: relative;
  /* width: 10px;
  height: 10px; */
}

.brand-title {
  font-family: "Gaegu", cursive;
  font-size: 1.5em;
}

.brand-logo {
  position: absolute;
  top: 10px;
  left: 5px;
}
</style>
