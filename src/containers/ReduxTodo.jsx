import React from 'react';
import {connect} from 'react-redux';

class ReduxTodo extends React.Component {
  render(){
    return(
        <div>
          <p>todo</p>
        </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStatesToProps, mapDispatchToProps)(ReduxTodo);