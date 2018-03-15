// 在node下运行的，所以看到很多require
const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // 入口文件的配置项
  entry: {
    app: resolve(__dirname, 'src/index.js')
  },
  // 出口文件的配置项
  output: {
    publicPath: '/',
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  // 模块：例如解读CSS,图片如何转换，压缩
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss'},
      {test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000'}, // 限制大小5kb
      {test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'} // 限制大小小于5k
    ]
  },
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: './.eslintrc'
      }
    })
  ],
  devServer: {
    port: 8080,
    contentBase: '/', // resolve(__dirname, 'dist'),//本地服务器所加载的页面所在的目录
    publicPath: '/',
    inline: true, // 实时刷新
    hot: true, // 使用热加载插件 HotModuleReplacementPlugin
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': ''}
      }
    },
    historyApiFallback: true, // 注意这个属性，浏览器刷新页面是否还能找的到
    progress: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
