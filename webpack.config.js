const path = require('path');
const loader = require('sass-loader');

module.exports = {
  entry: "/src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_Modules)/,
        use: {
          loader: "babel-loader",
          options: {
            preset: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\(sa|sc|c)ss$/,
        use: [
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  mode: "development",
};
