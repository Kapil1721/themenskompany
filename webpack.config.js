const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const BrowserifyZlib = require("browserify-zlib");

const { name: NAME } = require("./package.json");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  //this is where webpack will start looking,to start building the bundle

  // also can set multiple entry point  entry: {
  //     home: './home.js',
  //     about: './about.js',
  //     contact: './contact.js',
  //   },

  // few entry are better than long list of bundel due to larger bundel size

  mode: isProd ? "production" : "development",

  entry: ["@babel/polyfill", "./src/index.js", "./src/style.css"],

  // output key contains  instructing webpack on how and where it should output your bundles,
  // assets, and anything else you bundle or load with webpack.

  output: {
    publicPath: "/",
    chunkFilename: "[contenthash].js",
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, "./build"),
  },

  resolve: {
    extensions: [".jsx", ".js", ".css"],
  },

  devServer: {
    historyApiFallback: true,
    host: "localhost",
    port: 3010,
    hot: true,
  },

  devtool: isProd ? false : "source-map",

  optimization: {
    minimize: !isProd, //minimize the size of the generated output bundle
    minimizer: [new TerserWebpackPlugin({ test: /\.js(\?.*)?$/i })],
    chunkIds: "total-size", // Tells webpack which algorithm to use when choosing chunk ids
    concatenateModules: true, // concatenated into a single module and finds duplicate and reduce chunk size
  },

  // These options determine how the different types of modules within a project will be treated.
  // A Rule can be separated into three parts — Conditions, Results and nested Rules.

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|otf|ttf|woff|woff2|eot|webp)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      favicon: "./public/2022-06-30.png",
      filename: "./index.html",
      inject: "body",
      title: NAME,
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: `[chunkhash].bundle.css`,
      linkType: "text/css",
    }),

    new webpack.ProvidePlugin({
      process: "process/browser",
      zlib: BrowserifyZlib,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "build"),
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),

    new CompressionWebpackPlugin(),
  ],

  performance: {
    hints: isProd ? "warning" : false,
    maxAssetSize: 2048000,
    maxEntrypointSize: 2048000,
  },

  target: "web",
};
