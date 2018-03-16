import React from 'react';
import PropTypes from 'prop-types';
import {Prompt} from 'react-router-dom';

const User = ({match}) => {
  return (
    <div>
      <p>{match.params.id}</p>
      <Prompt message="残忍离开？" />
    </div>
  );
};

User.propTypes = {
  match: PropTypes.object
};

export default User;
