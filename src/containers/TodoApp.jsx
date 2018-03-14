import React from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import TodoList from '../components/common/TodoList';
import todoApp from '../reducers/index';

class TodoApp extends React.Component {
  render(){
    return(
        <div>
          <p>todo</p>
          <TodoList />
        </div>
    );
  }
}

const mapStatesToProps = (state) => {

};

export default connect(mapStatesToProps)(TodoApp);