import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="d-flex justify-content-end  d-flex justify-content-end  messageContainer">
          <p className="sentText d-flex flex-row d-flex align-items-center pr-10">{trimmedName}</p>
          <div className="messageBoxSend ">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer d-flex justify-content-start">
            <div className="messageBoxRecieve">
              <p className="messageText">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText d-flex flex-row d-flex align-items-center pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;