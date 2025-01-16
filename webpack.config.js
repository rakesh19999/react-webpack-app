const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  // Get the environment variables passed during the build
  const environment = env || {};

  return {
    entry: "./src/index.js", // Your React entry file
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true, // Clean the dist folder before each build
    },
    mode: environment.production ? "production" : "development", // Mode based on environment
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      // Inject environment variables into the React app
      new webpack.DefinePlugin({
        "process.env.REACT_APP_API_URL": JSON.stringify(
          environment.REACT_APP_API_URL || process.env.REACT_APP_API_URL
        ),
      }),
    ],
  };
};
