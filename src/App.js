import React from 'react';
import PlayController from './components/AudioPlayer/PlayController'
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayController ref="playc" file />
    </div>
  );
}

export default App;
