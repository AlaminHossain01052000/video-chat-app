import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  console.log(userVideo, myVideo);
  return (
    <div>
      {stream && (
        <div>
          <div>
            <h1>{name || 'Name'}</h1>
            <video playsInline muted ref={myVideo} autoPlay />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <div>
            <h1>{call.name || 'Name'}</h1>
            <video playsInline ref={userVideo} autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
