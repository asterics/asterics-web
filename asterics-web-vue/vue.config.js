const CopyWebpackPlugin = require("copy-webpack-plugin");

// console.log(
//   require("fs-extra").readdirSync(
//     "src/externals/asterics-docs/docs/.vuepress/dist"
//   )
// );

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: "src/external/webacs",
          to: "WebACS"
        },
        {
          from: "src/external/asterics-docs/docs/.vuepress/dist",
//          to: "docs",
          copyUnmodified: true
        }
      ])
    ]
  }
};
