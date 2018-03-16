import PropTypes from 'prop-types';
import React from 'react';
import Todo from '../components/reduxTodo/Todo';

const TodoList = ({todos, onTodoClick}) => {
  return (
    <div>
      <ul>
        {
          todos.map((item) => {
            return (
              <Todo key={item.id} item={item} onClick={() => {onTodoClick(item.id);}} />
            );
          })
        }
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

export default TodoList;
