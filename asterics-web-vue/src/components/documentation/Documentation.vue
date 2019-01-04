<template>
  
    <v-container fluid>
      <v-flex xs12>

        <div v-for="i in 5" :key="i">
        <h1>Topic {{i}}</h1>
        <hr/>

        <ul class="menu">
          <li v-for="i in 10" :key="i">
            <v-card>
              <v-img src="../../../public/img/asterics-logo.svg"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </li>
        </ul>

        </div>
      </v-flex>
    </v-container>
  
</template>

<script>
export default {};
</script>

<style scoped>
.menu li {
  display: inline-block;
  padding: 1em;
}
</style>
