const path = require("path");
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