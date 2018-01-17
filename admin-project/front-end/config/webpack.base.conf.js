const path = require("path");
const basePath = require("./base_path.js");

module.exports = {
    entry: ["babel-polyfill", "./src/main.js"],
    output: {
        path: path.resolve(__dirname, basePath.APP_PATH),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "img/",
                    // publicPath: "./dist/",
                    name: "[hash].[ext]"
                }
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    },
    performance: {
        hints: false
    },
};
