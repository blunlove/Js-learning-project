const config = require("./webpack.base.conf.js");
const webpack = require("webpack");

config.output.publicPath = "/dist";
config.devServer = {
    historyApiFallback: true,
    noInfo: true,
    // inline: true,        //实时刷新页面
    hot: true,              //热更新
    proxy: {
        "/api": {
            target: "http://localhost:8080",
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"
            }
        }
    }
};
config.devtool = "#inline-source-map";
config.plugins = [
    new webpack.HotModuleReplacementPlugin()
],

module.exports = config;
