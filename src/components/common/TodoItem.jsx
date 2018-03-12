import React from 'react';

class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const {data, deleteItem, id} = this.props;
    return(
        <div>
          {data}
          <a href="javascript:;" onClick={() => deleteItem(id)}>删除</a>
        </div>
    );
  }
}

export default TodoItem;