//Webpack support transpile of es2015
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV === "development";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: {
    app: "./src/index.js"
  },
  stats: {
    warnings: false
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: process.env.PORT || 4000,
    publicPath: "http://localhost:4000/dist/",
    hotOnly: true,
    historyApiFallback: true
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Freigthub Shipment"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_component)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  }
};
