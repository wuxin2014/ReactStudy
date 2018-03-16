# 通过路由传值的方法


# Router中的属性和路由模式

## Router中的属性
1. basename
2. forceRefresh: 作用是开启或者关闭React Router

## 5种路由方式
1. BrowserRouter: 浏览器的路由方式
2. HashRouter: 在路径前加入#号成为一个哈希值。Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。
3. MemoryRouter: 不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
4. NativeRouter: 经常配合ReactNative使用
5. StaticRouter: 设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用


# <Prompt>标签属性
1. message：用于显示提示的文本信息
2. when：传递布尔值，相当于标签的开关，默认是true，设置成false时，<Prompt>失效

注意: 如果你用MemoryRouter路由模式，<Prompt>不起作用。
