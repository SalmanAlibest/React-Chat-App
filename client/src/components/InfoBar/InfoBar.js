import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';
const InfoBar = ({ room }) => (
    <div className="navbar  colour">
      <div className="d-flex flex-row d-flex align-items-center  leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="d-flex flex-row d-flex justify-content-end rightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
  
  export default InfoBar;