const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require("chalk");

module.exports = function (config) {
  let webpackConfig = {
    // JS 执行入口文件
    entry: config.dll,
    output: {
      // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，
      // 也就是 entry 中配置的 react 和 polyfill
      filename: 'js/[name].js',
      // 输出的文件都放到 dist 目录下
      path: config.assetsRoot,
      // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
      // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
      library: '_dll_[name]'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
      // 接入 DllPlugin
      new DllPlugin({
        // 动态链接库的全局变量名称，需要和 output.library 中保持一致
        // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
        // 例如 react.manifest.json 中就有 "name": "_dll_react"
        name: '_dll_[name]',
        // 描述动态链接库的 manifest.json 文件输出时的文件名称
        path: path.join(config.assetsRoot, 'js/[name].manifest.json')
      }),
      new ProgressBarPlugin({
        format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename:'css/[id].css',
      })
    ]
  };
  return webpackConfig;
};
