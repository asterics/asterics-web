<template>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <span v-html="content"></span>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      content: ""
    };
  },
  computed: {
    ...mapGetters(["helpInfo"])
  },
  created: function() {
    /* FIXME: check for xss */
    let tag = this.$route.params[0];
    let path = this.$route.params[1];
    let filename = this.$route.params[2];

    // eslint-disable-next-line
    let s = `${this.helpInfo.raw}${tag}/${this.helpInfo.path}/${path}/${filename}`;

    fetch(s)
      .then(res => {
        return res.text();
      })
      .then(html => {
        // Replace pictures
        let r = new RegExp(`src="img`, "g");
        // eslint-disable-next-line
        let c = html.replace(
          r,
          `src="${this.helpInfo.raw}${tag}/${this.helpInfo.path}/${path}/img`
        );

        //FIXME: (implement) Change href
        r = /href="/;

        let p = new DOMParser();
        let d = p.parseFromString(c, "text/html");

        this.content = d.body.innerHTML;
      });
  },
  beforeMount() {
    this.$store.commit("sidebarVisible", true);
  }
};
</script>

<style scoped>
</style>
