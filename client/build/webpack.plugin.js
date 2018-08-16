const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require("path");
const chalk = require("chalk");
module.exports = function (config) {
    return [
        new DllReferencePlugin({
            // 描述 react 动态链接库的文件内容
            manifest: require(path.join(config.assetsRoot, 'js/base.manifest.json'))
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new FriendlyErrorsWebpackPlugin()
    ]
}
