const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", "scss"],
    alias: {
      "@src": path.resolve(__dirname, "..", "src/"),
      "@components": path.resolve(__dirname, "..", "src/components/"),
      "@styles": path.resolve(__dirname, "..", "src/styles/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //   {
      //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //     type: "asset/resource",
      //   },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  //   devServer: {
  //     contentBase: path.resolve(__dirname, "..", "./build"),
  //     hot: true,
  //   },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html"),
      favicon: path.resolve(__dirname, "..", "./public/favicon.ico"),
    }),
  ],
};
