import {connect} from 'react-redux';
import {toggleTodo} from '../actions/todos';
import TodoList from '../containers/TodoList';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

