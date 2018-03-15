import {
  addItem,
  deleteItem
} from '../constant/todo';


const todo = (state, action) => {
  switch (action.type) {
    case addItem:
      return state;
      break;
    case deleteItem:
      return state;
      break;
    default:
      return state;
      break;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case addItem:
      return state;
      break;
    case deleteItem:
      return state;
      break;
    default:
      return state;
      break;
  }
};

export default todos;
