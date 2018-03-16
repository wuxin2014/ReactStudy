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


# babel-polyfill VS babel-runtime VS babel-plugin-transform-runtime
1. 首先 babel-polyfill 是对所有的API进行全局设置。并且会污染全局变量。
2. babel-runtime 需要对你需要的API，如：Object.assign()。会先require()
3. babel-plugin-transform-runtime 最推荐。它不需要require()也不会全局污染，并且，更厉害的是它是按需打包，全自动。


# Cannot use [chunkhash] for chunk in '[name].[chunkhash].js' (use [hash] instead)
热更新(HMR)不能和[chunkhash]同时使用。
1. 如果是开发环境，将配置文件中的chunkhash 替换为hash
2. 如果是生产环境，不要使用参数 --hot
