const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkg = require("./package.json");
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: ["./src/main.ts"]
    },
    output: {
        filename: "scripts/[name].js",
        path: path.join(__dirname, "docs/")
    },
    plugins: [new HtmlWebpackPlugin({
        title: pkg.name,
        template: path.resolve(__dirname, "./public/index.html"),
        inject: "body"
    })],
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    }
};