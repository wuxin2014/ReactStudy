let pkg = require('./package.json');
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');


//一些常用路径
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'src');
let BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
let NODE_MODULES = path.resolve(ROOT_PATH, 'node_modules');


module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    // 将 第三方依赖（node_modules中的） 单独打包
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: BUILD_PATH,
    filename: "[name].[chunkhash:8].js"
  },

  resolve:{
    extensions:['.js','.jsx']
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } },
      {
        test: /\.less$/,
        use:[
          'style-loader',
          {
            loader: "css-loader",
            options: {importLoaders: 1} //这里可以简单理解为，如果css文件中有 import 进来的文件也进行处理
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [
                require('postcss-import')({root: loader.resourcePath}),
                require('autoprefixer')(), //css 浏览器兼容
                require('cssnano')() //压缩css
              ]
            }
          },
          {
            loader: "less-loader"
          }
        ]
        // exclude: /node_modules/,
        // loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      // { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader!css-loader!postcss-loader!less-loader') },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          {
            loader: "css-loader",
            options: {importLoaders: 1} //这里可以简单理解为，如果css文件中有 import 进来的文件也进行处理
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [
                require('postcss-import')({root: loader.resourcePath}),
                require('autoprefixer')(), //css 浏览器兼容
                require('cssnano')() //压缩css
              ]
            }
          }
        ]
        // exclude: /node_modules/,
        // loader: 'style-loader!css-loader!postcss-loader'
      },
      // { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader!css-loader!postcss-loader?name=css/[name].[chunkhash:8].[ext]') },
      { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' },  // 限制大小5kb
      { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'} // 限制大小小于5k
    ]
  },
  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by zmy"),
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function(){
          return [
            require("autoprefixer")({
              browsers: ['ie>=8','>1% in CN']
            })
          ]
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "/js/[name].[chunkhash:8].js"
    }),
    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}