<template>
  <div>
      <v-subheader v-if="rate_limit != ''">
        Rate Limit:&nbsp;&nbsp;
        <div :class="{'text-danger': rate_limit.rate.remaining == 0}">{{rate_limit.rate.remaining}}</div>&nbsp;
         / {{rate_limit.rate.limit}}<v-spacer></v-spacer>
        <v-subheader style="font-size:xx-small;">Reset in: {{reset}}</v-subheader>    
      </v-subheader>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      timer: "",
      rate_limit: "",
      reset: ""
    };
  },
  computed: {
    ...mapGetters(["helpInfo"])
  },
  methods: {
    updateRateLimit() {
      fetch(this.helpInfo.rate_limit)
        .then(r => r.json())
        .then(r => {
          this.rate_limit = r;
          let t2 = r.rate.reset;
          let t1 = Date.now() / 1000;
          let diff = Math.abs(t2 - t1);

          // let days = Math.floor(diff / 86400);
          // let hours = Math.floor(diff / 3600) % 24;
          let minutes = Math.floor(diff / 60) % 60;
          let seconds = diff % 60;

          this.reset = `${minutes}m ${seconds.toFixed(0)}s`;
        });
    }
  },
  created() {
    this.updateRateLimit();
    this.timer = setInterval(this.updateRateLimit, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.text-danger {
  color: darkred;
}
</style>
