<template>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <div v-html="content"></div>
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
    ...mapGetters(["helpInfo", "github"])
  },
  created: function() {
    /* FIXME: check for xss */
    let tag = this.$route.params[0];
    let path = this.$route.params[1];
    let filename = this.$route.params[2];

    let basePath = `${this.github.api.raw}/`;
    basePath += `${this.github.AsTeRICS.path}/`;
    basePath += `${tag}/`;
    basePath += `${this.github.AsTeRICS.acs_help}/`;
    basePath += `${this.github.AsTeRICS.acs_help_docs}/`;
    basePath += `${path}`;

    fetch(`${basePath}/${filename}`)
      .then(res => {
        return res.text();
      })
      .then(html => {
        /* correct src path of pictures */
        html = html.replace(/src="img/g, `src="${basePath}/img`);

        /* correct picture style */
        html = html.replace(/<img/g, `<img style="max-width: 100%;"`);

        //FIXME: (implement) correct href's to working links.
        // html = html.replace(/href="/g, `href="${basePath}`);

        /* parse html */
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");

        this.content = doc.body.innerHTML;
      });
  },
  beforeMount: function() {
    this.$store.commit("updateSidebarVisibility", true);
  }
};
</script>

<style scoped>
</style>
