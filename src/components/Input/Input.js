import React from 'react';

export const Password = ({ onChange = () => {} }) => {
  return (
    <React.Fragment>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export const Username = ({ onChange = () => {} }) => {
  return (
    <React.Fragment>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        onChange={onChange}
      />
    </React.Fragment>
  );
};
