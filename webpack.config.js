const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const copyWebpack = require("copy-webpack-plugin");
const ChromeExtensionReloader = require("webpack-chrome-extension-reloader");

const dev = process.env.NODE_ENV !== "production";

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, "/src/index.html"),
  filename: "index.html",
  inject: "body",
  chunks: ["popup"]
});

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production")
});

const copyWebpackPlugin = new copyWebpack([
  { from: "./src/manifest.json" },
  { from: "./src/icon-16.png" },
  { from: "./src/icon-128.png" },
  { from: "./src/icon-19.png" },
  { from: "./src/icon-38.png" }
]);

module.exports = {
  devServer: {
    host: "localhost",
    port: "3000",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true
  },

  entry: {
    popup: "./src/popup.js",
    content: "./src/content.js"
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/build")
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },

  resolve: {
    extensions: [".js", ".png", ".css", ".scss"]
  },

  mode: dev ? "development" : "production",

  plugins: dev
    ? [
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new ChromeExtensionReloader(),
        copyWebpackPlugin
      ]
    : [HTMLWebpackPluginConfig, DefinePluginConfig, copyWebpackPlugin]
};
