import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../containers/App';

/**
 * BrowserRouter的属性
 * 1、basename
 * 作用：为所有位置添加一个基准URL
 * 使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 basename 设置到此目录
 */

class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

export default RouterMap;
