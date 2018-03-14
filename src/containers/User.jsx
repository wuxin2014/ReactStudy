import React from 'react';

const User = ({match}) => {
  return (
      <div>{match.params.id}</div>
  );
};

export default User;