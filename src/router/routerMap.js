import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import Home from '../containers/Home';
import User from '../containers/User';
import NotFound from '../containers/NotFound';
import ReduxTodo from '../containers/ReduxTodo';
import ReactTodoList from '../containers/ReactTodoList';

/**
 * BrowserRouter的属性
 * 1、basename
 * 作用：为所有位置添加一个基准URL
 * 使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 basename 设置到此目录
 * V4中现在没有IndexRoute的写法了，采用exact的方式
 * 如果你的Home/User/NotFound是互斥的，那还要加上Switch
 *
 */

class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={User} />
            <Route path="/react/todo" component={ReactTodoList} />
            <Route path="/react/redux/todo" component={ReduxTodo} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouterMap;
