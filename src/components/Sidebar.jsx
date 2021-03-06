import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div>
      <div elevation={10}>
        <form noValidate autoComplete="off">
          <div>
            <div>
              <h1>Account Info</h1>
              <input label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <button type="button">Copy Your ID</button>
              </CopyToClipboard>
            </div>
            <div>
              <h1>Make a call</h1>
              <input label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <button type="button" onClick={leaveCall}>Hang Up</button>
              ) : (
                <button type="button" onClick={() => callUser(idToCall)}>
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
