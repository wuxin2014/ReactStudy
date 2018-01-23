import React from 'react';

export default class Count extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1,
    }
    this.add = this.add.bind(this);
    this.reduce = this.reduce.bind(this);
  }

  add() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }

  reduce() {
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }));
  }

  render(){ 
    return(
      <div>
        <button onClick={this.add}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.reduce}>-</button>
      </div>
    );
  }
}