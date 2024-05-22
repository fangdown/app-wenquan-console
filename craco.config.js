const { name } = require("./package");
module.exports = {
  webpack: {
    configure(webpackConfig) {
      if (webpackConfig.mode === "production") {
        // 抽离公共代码，只在生产环境
        if (webpackConfig.optimization == null) {
          webpackConfig.optimization = {};
        }
        webpackConfig.optimization.splitChunks = {
          chunks: "all",
          cacheGroups: {
            antd: {
              name: "antd-chunk",
              test: /antd/,
              priority: 100,
            },
            reactDom: {
              name: "reactDom-chunk",
              test: /react-dom/,
              priority: 99,
            },
            vendors: {
              name: "vendors-chunk",
              test: /node_modules/,
              priority: 98,
            },
          },
        };
      }
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = "window";
      webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      return webpackConfig;
    },
  },

  devServer: {
    port: 12010, // B 端，前端
    proxy: {
      "/api": "http://localhost:11011", // Mock
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
