import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {COUNTER_INCREMENT, COUNTER_DECREMENT} from '../constant';

const Counter = ({counter, dispatch}) => {

  const onIncrement = () => {
    dispatch({
      type: COUNTER_INCREMENT
    });
  };

  const onDecrement = () => {
    dispatch({
      type: COUNTER_DECREMENT
    });
  };

  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={onIncrement}>
        +
      </button>
      {' '}
      <button onClick={onDecrement}>
        -
      </button>
    </p>
  );
};

Counter.propTypes = {
  counter: PropTypes.number,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
