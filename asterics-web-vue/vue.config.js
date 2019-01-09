const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: "src/external/webacs",
          to: "WebACS"
        }
      ])
    ]
  }
};
