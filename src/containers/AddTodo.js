import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../actions/todos';

const AddTodo = ({dispatch}) => {
  let input = null;
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input ref={(node) => {input = node;}} />
        <button type="submit">addTodo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddTodo);
