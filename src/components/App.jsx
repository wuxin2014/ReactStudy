import React from 'react';
import TodoList from './common/TodoList';

export default class App extends React.Component {
  render(){ 
    return(
      <div>
        <TodoList />
      </div>
    );
  }
}