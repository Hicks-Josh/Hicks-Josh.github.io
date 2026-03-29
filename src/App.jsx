import React from 'react';
import MineSweeper from './components/mineSweeper/index.jsx';
import Wave from 'react-wavify';

import Welcome from './components/Welcome.jsx';

import './App.css';

const fullViewport = {
  height: '100vh',
  width: '100vw',
  margin: 0,
  overflow: 'hidden',
};

// TODO: add minesweeper to the background
// TODO: scrape my steam last played games
function App() {
  return (
    <div style={fullViewport}>
      {/* background */}
      <div className="background-design">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
      {/* content */}
      <Welcome />
      {/* cool wave and ship animation lol */}
      <Wave
        fill="lightblue"
        paused={false}
        style={{ bottom: -5, position: 'fixed' }}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />
      <div className="ship" style={{ bottom: 70, fontSize: '3rem', left: 50 }}>
        ⛴️
      </div>
    </div>
  );
}

export default App;
