const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./App/index.js",
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
            { test: /\.(js)$/, use: ["babel-loader"] }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "App/index.html"
        })
    ],
    mode: "development"
}