import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Link的属性
 * to: string // 跳转到指定路径
 * to: object // 携带参数跳转到指定路径
 * replace: bool 为 true 时，点击链接后将使用新地址替换掉上一次访问的地址
 *
 * http://localhost:8080/user/1?sort=name
 */

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/user/1">进入user界面</Link></li>
          <li>
            <Link to={{
              pathname: '/user/1',
              search: '?sort=name',
              state: { price: 18 }
            }}>通过Link传递参数</Link>
          </li>
          <li><Link to="/react/todo">ReactTodoDemo</Link></li>
          <li><Link to="/react/redux/todo">ReduxTodoDemo</Link></li>
        </ul>
      </div>
    );
  }
}