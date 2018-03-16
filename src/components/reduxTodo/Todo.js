import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({item, onClick}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: item.completed ? 'line-through' : 'none'
      }}
    >
      {item.text}
    </li>
  );
};

Todo.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func
};

export default Todo;
