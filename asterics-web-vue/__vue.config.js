const docs = require("./src/build/docs.js");
const WebpackPreBuildPlugin = require("pre-build-webpack");

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new WebpackPreBuildPlugin(function(stats) {
        docs.loadHTML();
        console.log(stats);
      })
    ]
  }
};
