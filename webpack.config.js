const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
            { test: /\.(js)$/, use: ["babel-loader"] },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    mode: "development"
}