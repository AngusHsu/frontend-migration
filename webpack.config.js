// webpack.config.js
var path = require("path");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index"], // .js after index is optional
  output: {
    path: path.resolve(__dirname, "static/react/js"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Load css
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, `src/index.html`),
      filename: path.resolve(__dirname, "build/index.html")
    })
  ],
  externals: {
    boostrap: "boostrap",
    jquery: "jQuery"
  }
};
