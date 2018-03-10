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
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions:['.js','.jsx']
  },

  // 模块：例如解读CSS,图片如何转换，压缩
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'//loader的名称（必须）
      },
      // { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
      { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
      { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
    ]
  },

  /*eslint: {
    configFile: '.eslintrc' // Rules for eslint
  },*/

  postcss: [
    require('autoprefixer') //调用autoprefixer插件，例如 display: flex
  ],

  // 插件，用于生产模版和各项功能
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    }),
  ],

  // 配置webpack开发服务功能  开发环境
  devServer: {
    host:'localhost',
    port: 8080, //设置监听端口（默认的就是8080）
    //设置基本目录结构
    contentBase: resolve(__dirname, 'dist'),//本地服务器所加载的页面所在的目录
    publicPath:'/',
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true  // 使用热加载插件 HotModuleReplacementPlugin
  },
};

module.exports = config;