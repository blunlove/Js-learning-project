const config = require("./webpack.base.conf.js");
const basePath = require("./base_path.js");
const webpack = require("webpack");

config.output.publicPath = basePath.PUBLIC_PATH;
config.devServer = {
    historyApiFallback: true,
    noInfo: true,
    // inline: true,        //实时刷新页面
    hot: true,              //热更新
    proxy: {
        "/api": {
            target: "http://172.16.8.214:8080",
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
