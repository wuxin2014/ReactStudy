import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const {data, deleteItem, id} = this.props;
    return (
      <div>
        {data}
        <a href="javascript:" onClick={() => {deleteItem(id);}}>删除</a>
      </div>
    );
  }
}

TodoItem.propTypes = {
  data: PropTypes.object,
  deleteItem: PropTypes.func,
  id: PropTypes.number
};

export default TodoItem;
