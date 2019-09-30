import React from 'react';
import ButtonGroup from './components/AudioPlayer/ButtonGroup'
import './App.css';

function App() {
  return (
    <div className="App">
          <ButtonGroup disabled={false}
            isPlaying={false} isPause={false}
            isLoading={false}
             />
    </div>
  );
}

export default App;
