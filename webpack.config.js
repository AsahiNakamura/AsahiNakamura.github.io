const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkg = require("./package.json");
const CopyPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const styleLoaderRules = [
  {
    test: /\.scss/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          url: false, // CSS内のurl()メソッドの取り込みを禁止
          importLoaders: 2,
        },
      },
      {
        loader: "sass-loader",
      },
    ],
  },
];
module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    main: ["./src/main.ts"],
  },
  output: {
    filename: "scripts/[name].js",
    path: path.join(__dirname, "docs/"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: path.resolve(__dirname, "./public/index.html"),
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        {
          to: "./assets/",
          from: path.join(__dirname, "./public/assets"),
        },
        {
          to: "./",
          from: path.join(__dirname, "CNAME")
        }
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".ts", ".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      ...styleLoaderRules,
    ],
  },
};
