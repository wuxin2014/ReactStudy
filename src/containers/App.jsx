import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import User from '../containers/User';
import NotFound from '../containers/NotFound';
import ReduxTodo from '../containers/ReduxTodo';
import ReactTodoList from '../containers/ReactTodoList';

// V4中现在没有IndexRoute的写法了，采用exact的方式
// 如果你的Home/User/NotFound是互斥的，那还要加上Switch

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" component={User} />
          <Route path="/react/todo" component={ReactTodoList} />
          <Route path="/react/redux/todo" component={ReduxTodo} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
