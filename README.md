# 从零构建React工程
1. 新建一个文件夹ReactStudy
2. npm init -y
3. 安装各种需要的依赖:
npm install webpack --save-dev

# webpack的命令
1. webpack --config XXX.js //使用另一份配置文件（比如webpack.config2.js）来打包
2. webpack --watch //监听变动并自动打包
3. webpack -p //压缩混淆脚本，这个非常非常重要！
4. webpack -d //生成map映射文件，告知哪些模块被最终打包到哪里了其中的
5. webpack --progress //显示进度条
6. webpack --color //添加颜色
7. webpack --display-error-details //显示异常信息

# webpack-dev-server的命令 执行webpack.config.js 文件下的devServer
1. webpack-dev-server --content-base /path/to/content/dir
2. webpack-dev-server --disable-host-check
3. webpack-dev-server --host 0.0.0.0
4. webpack-dev-server --port 8080
5. webpack-dev-server --open || webpack-dev-server --open 'Google Chrome'
6. webpack-dev-server --hot-only
7. webpack-dev-server --inline=false
8. webpack-dev-server --lazy
9. webpack-dev-server --progress
10. webpack-dev-server --watch-content-base


# module配置rule
test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
use：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
query：为loaders提供额外的设置选项（可选）。


# webpack的主要优势：
1. 按需加载模块，按需进行懒加载，在实际用到某些模块的时候再增量更新
2. webpack 是以 commonJS 的形式来书写脚本，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
3. 能被模块化的不仅仅是 JS 了，能处理各种类型的资源。
4. 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。
5. 扩展性强，插件机制完善


# 前端模块系统的演进
# CommonJS
require("module");
require("../file.js");
exports.doStuff = function() {};
module.exports = someValue;

## 优点：
1. 服务器端模块便于重用
2. NPM 中已经有将近20万个可以使用模块包
3. 简单并容易使用

## 缺点：
1.同步的模块加载方式不适合在浏览器环境中，同步意味着阻塞加载，浏览器资源是异步加载的
2. 不能非阻塞的并行加载多个模块

## 实现：
1. 服务器端的 Node.js
2. Browserify，浏览器端的 CommonJS 实现，可以使用 NPM 的模块，但是编译打包后的文件体积可能很大


# AMD(Asynchronous Module Definition)
define("module", ["dep1", "dep2"], function(d1, d2) {
  return someExportedValue;
});
require(["module", "../file"], function(module, file) { /* ... */ });
## 优点：
1. 适合在浏览器环境中异步加载模块
2. 可以并行加载多个模块
## 缺点：
1. 提高了开发成本，代码的阅读和书写比较困难，模块定义方式的语义不顺畅
2. 不符合通用的模块化思维方式，是一种妥协的实现
## 实现：
1. RequireJS
2. curl

# CMD
define(function(require, exports, module) {
  var $ = require('jquery');
  var Spinning = require('./spinning');
  exports.doSomething = ...
  module.exports = ...
})
## 优点：
1. 依赖就近，延迟执行
2. 可以很容易在 Node.js 中运行
## 缺点：
1. 依赖 SPM 打包，模块的加载逻辑偏重
## 实现：
1. Sea.js
2. coolie
# UMD

# ES6模块
import "jquery";
export function doStuff() {}
module "localModule" {}
## 优点：
1. 容易进行静态分析
2. 面向未来的 EcmaScript 标准
## 缺点：
1. 原生浏览器端还没有实现该标准
2. 全新的命令字，新版的 Node.js才支持
## 实现：
1. Babel