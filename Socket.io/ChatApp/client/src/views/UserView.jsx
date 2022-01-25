import React from 'react';

const UserView = ({children}) => {
  return (
    <div>
      <div>
        <h1>Welcome to the chat app!</h1>
      </div>
      {children}
    </div>
  )
};

export default UserView;
