const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    // dev: {
    //   host: "localhost",
    //   port: 8888
    // },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: "src/external/webacs",
          to: "WebACS"
        },
        {
          from: "src/external/asterics-docs/dist",
          to: "docs",
          copyUnmodified: true
        }
      ])
    ]
  }
};
