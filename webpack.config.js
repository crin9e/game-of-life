const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  mode: process.env.NODE_ENV,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    // alias: {
    //   types: path.resolve(__dirname, "src/types"),
    //   components: path.resolve(__dirname, "src/components"),
    //   "@": path.resolve(__dirname, "src"),
    // },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    // publicPath: "/",
    // globalObject: "(typeof self!='undefined'?self:global)",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },],
        include: path.resolve(__dirname, "src"),
      },
      // {
      //   test: /\.worker\.(ts|js)$/,
      //   use: { loader: "worker-loader" },
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    // historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    })
  ],
};
