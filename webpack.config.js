const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),// 打包后的js文件存放的地方
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'//loader的名称（必须）
      }
    ]
  },
  devServer: {
    port: 8080, //设置监听端口（默认的就是8080）
    contentBase: resolve(__dirname, 'dist'),//本地服务器所加载的页面所在的目录
    publicPath:'/',
  },
  plugins: [new HtmlWebpackPlugin()]
}

module.exports = config;