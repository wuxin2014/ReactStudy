import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({item, onClick}) => {
  return (
    <li>
      <span>{item.text}</span>
    </li>
  );
};

Todo.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func
};

export default Todo;
