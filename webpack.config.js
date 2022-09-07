const glob = require("glob");

module.exports = {
  entry: glob.sync("./src/scripts/*.js").reduce((acc, item) => {
    const name = item.match(/.src\/scripts\/([\s\S]*?).js/)[1];
    acc[name] = item;
    return acc;
  }, {}),
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["@babel/preset-env", { modules: false }]]
          }
        }
      }
    ]
  }
};
