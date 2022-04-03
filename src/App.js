import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

function App() {
  return (
    <div>
      <div>
        <h1 variant="h2" align="center">Video Chat</h1>
      </div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
}

export default App;
