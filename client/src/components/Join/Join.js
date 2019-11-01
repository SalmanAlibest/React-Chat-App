import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="d-flex justify-content-center joinOuterContainer">
      <div className="form-group">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="form-control" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="form-control mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'btn btn-primary  mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}