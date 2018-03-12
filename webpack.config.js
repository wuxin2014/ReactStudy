// 在node下运行的，所以看到很多require
const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // 入口文件的配置项
  entry: resolve(__dirname, 'src/index.js'),
  // 出口文件的配置项
  output: {
    //输出的路径，用了Node语法
    path: resolve(__dirname, 'dist'),// 打包后的js文件存放的地方
    // [name]的意思是根据入口文件的名称，打包成相同的名称，有几个入口文件，就可以打包出几个文件
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  // 模块：例如解读CSS,图片如何转换，压缩
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'//loader的名称（必须）
      },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
      { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
      { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
    ]
  },
  // 插件，用于生产模版和各项功能
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      // template: __dirname + '/src/index.html'
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),
  ],

  // 配置webpack开发服务功能  开发环境
  devServer: {
    port: 8080, //设置监听端口（默认的就是8080）
    //设置基本目录结构
    contentBase: '/', // resolve(__dirname, 'dist'),//本地服务器所加载的页面所在的目录
    publicPath:'/',
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true, // 使用热加载插件 HotModuleReplacementPlugin
    hotOnly: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api": ""}
      }
    },
    progress: true
  },
  resolve: {
    extensions:['.js','.jsx']
  },
};

module.exports = config;