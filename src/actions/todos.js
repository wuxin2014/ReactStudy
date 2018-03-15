import {
  addItem,
  deleteItem
} from '../constant/todo';

export const addTodo = (text) => {
  return {
    type: addItem,
    text
  };
};

export const deleteTodo = (index) => {
  return {
    type: deleteItem,
    index
  };
};

