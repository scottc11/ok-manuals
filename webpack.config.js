const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Load environment variables from .env file
require('dotenv').config();

module.exports = {
  mode: "none",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: process.env.NODE_ENV === 'production' ? '/ok-manuals/' : '/',
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    static: "./dist",
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.SVG\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: {typescript: true}}],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
      "process.env.API_DOMAIN": JSON.stringify(process.env.API_DOMAIN || "set_vercel_domain_envirnonment_variable"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: './src/media/favicon.svg',
    }),
  ],
};
