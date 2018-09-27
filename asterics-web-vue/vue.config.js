module.exports = {
  chainWebpack: config => {
    // XML Loader
    config.module
      .rule("raw")
      .test(/\.abd$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
