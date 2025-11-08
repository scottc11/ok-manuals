const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

// Load environment variables from .env file
require('dotenv').config();

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: '/',
  },
  devtool: "eval-cheap-module-source-map", // Changed from "inline-source-map"
  devServer: {
    port: 3000,
    static: "./public",
    historyApiFallback: true,
    hot: true,
    watchFiles: {
      paths: ['src/client/**/*'],
      options: {
        usePolling: false,
      },
    },
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  watchOptions: {
    ignored: /node_modules/,
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
          options: isDevelopment
            ? {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: [ReactRefreshTypeScript()],
                }),
              }
            : {},
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
      template: "./src/client/index.html",
      favicon: './src/client/media/favicon.svg',
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'firmware'), to: '.' },
      ],
    }),
  ].filter(Boolean),
};
