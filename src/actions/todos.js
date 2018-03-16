import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../constant';

let idIndex = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
    id: idIndex++
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
