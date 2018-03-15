import React from 'react';
import TodoItem from '../components/common/TodoItem';

class ReactTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        'jajaj'
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem() {
    console.log(this.input.value);
    const oldArr = this.state.data;
    oldArr.push(this.input.value);
    this.setState({
      data: oldArr
    });
    this.input.value = '';
  }

  deleteItem(key) {
    const oldArr = this.state.data;
    const newData = oldArr.filter((item, index) => {
      return index !== key;
    });
    this.setState({
      data: newData
    });
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="请输入内容"
          ref={(inputRef) => {
            this.input = inputRef;
          }}
        />
        <button onClick={this.addItem}>确定</button>
        {
          data.map((item, index) => {
            return <TodoItem key={index} id={index} data={item} deleteItem={this.deleteItem} />;
          })
        }
      </div>
    );
  }
}

export default ReactTodoList;
