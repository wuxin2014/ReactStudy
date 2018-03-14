import {
  addItem,
  deleteItem
} from '../constant/todo';

export const addTodo = (text) => ({
  type: addItem,
  text
});

export const deleteTodo = (index) => ({
  type: deleteItem,
  index
});

