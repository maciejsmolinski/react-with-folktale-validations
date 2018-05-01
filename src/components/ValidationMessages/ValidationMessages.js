import React from 'react';

const ValidationMessages = ({ messages = [], ...props }) => {
  return (
    <React.Fragment>
      {messages.map(msg => (
        <div key={msg} {...props}>
          {msg}
        </div>
      ))}
    </React.Fragment>
  );
};

export default ValidationMessages;
