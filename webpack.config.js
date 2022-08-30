const path = require("path");

const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
 mode: "development",
 entry: {
  main: "./script.js",
  styles: "./css/sass/main.css"
 },
 output: {
  path: path.resolve(__dirname, "public"),
  filename: "scripts.bundle.js",
 },
 module: {
  rules: [
   {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
   }
  ]
 },
 plugins: [
  new HtmlWebpackPlugin({ template: "./index.html" }),
  new MiniCssExtractPlugin({ filename: "style.css" }),
  new RemoveEmptyScriptsPlugin(),
  new CSSMinimizerPlugin({})
 ]
}
