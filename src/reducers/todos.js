import {
  addItem,
  deleteItem
} from '../constant/todo';


const todo = (state, action) => {
  switch(action.type) {
    case addItem:

      break;
    case deleteItem:

      break;
    default:
      return state;
      break;
  }
};

const todos = (state=[], action) => {
  switch(action.type) {
    case addItem:
        return state;
      break;
    case deleteItem:
      break;
    default:
      return state;
      break;
  }
};

export default todos;