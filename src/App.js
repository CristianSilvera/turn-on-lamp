import React, {useState} from 'react';
import lighton from './component/img/turn-on.jpg';
import lightoff from './component/img/turn-off.jpg';
import './App.css';

function App() {

  const [turnOn, setTurnOn]=useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={turnOn?lighton:lightoff} className="App-lighton" alt="lighton" />
        
        <br></br><br></br>
        <button onClick={() => setTurnOn(!turnOn)}>{turnOn?'Turn On':'Turn Off'}</button>
        <p>
          Bootcamp <code>challenge</code> Moove-it and Utec.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 
  );
}

export default App;
