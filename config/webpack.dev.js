const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.common');


module.exports = merge(common, {
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        port: 8081
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})