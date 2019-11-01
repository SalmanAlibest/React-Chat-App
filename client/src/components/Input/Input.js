import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="d-flex flex-row form">
    <input
      className="form-control input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button type="button" className=" btn btn-primary "id="sendButton" onClick={e => sendMessage(e)}>Send</button>
    
  </form>
)

export default Input;