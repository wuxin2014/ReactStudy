import React from 'react';
import PropTypes from 'prop-types';

const User = ({match}) => {
  return (
    <div>
      <p>{match.params.id}</p>
    </div>
  );
};

User.propTypes = {
  match: PropTypes.object
};

export default User;
