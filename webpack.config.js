var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        query: {
          presets: ["es2015","react","stage-0"]
        }
      }
    ]
  }
};