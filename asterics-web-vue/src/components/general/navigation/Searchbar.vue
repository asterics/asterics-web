<template>
  <b-nav-form class="form-inline">
    <b-input-group class="w-100 mx-lg-4 mt-4 mt-lg-0 nav-input">
      
      <b-form-input class="mr-sm-0" type="text" :placeholder="this.placeholder"></b-form-input>
      
      <div class="input-group-append">

        <slot></slot>
        
        

      </div>

    </b-input-group>
  </b-nav-form>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    }
  }
};
</script>

<style scoped>
.nav-input {
  display: flex;
  flex-flow: row nowrap;
}
</style>
