import React, {useState} from 'react';
import Lamp from './component/Lamp'
import './App.css';

function App() {

  const [turnOn, setTurnOn]=useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <Lamp turnOn={turnOn} setTurnOn={setTurnOn}/>
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
