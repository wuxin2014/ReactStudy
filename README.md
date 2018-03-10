# 从零构建React工程
1、新建一个文件夹ReactStudy
2、npm init -y
3、安装各种需要的依赖:
npm install webpack --save-dev



test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
use：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
query：为loaders提供额外的设置选项（可选）。

style-loader: 用来处理css文件中的url()
css-loader：用来将css插入到页面的style标签