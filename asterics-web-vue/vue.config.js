const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath);

const endpoint = config.get("endpoint");
const base = endpoint === "" ? "" : `/${endpoint}/`;

module.exports = {
  baseUrl: base,
  configureWebpack: {
    // dev: {
    //   host: "localhost",
    //   port: 8888
    // },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: "src/external/webacs/dist",
          to: "WebACS",
          copyUnmodified: true
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
