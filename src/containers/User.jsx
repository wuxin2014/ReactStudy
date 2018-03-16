import React from 'react';
import PropTypes from 'prop-types';
import {Prompt} from 'react-router-dom';

const User = ({location, match}) => {
  return (
    <div>
      <p>{location.state ? location.state.price : 0}</p>
      <p>{match.params.id}</p>
      <Prompt message="残忍离开？" />
    </div>
  );
};

User.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

export default User;
