import React from 'react';
import lighton from './img/turn-on.jpg';
import lightoff from './img/turn-off.jpg';
//import './App.css';

function Lamp(props) {

  //const [turnOn, setTurnOn]=useState(false)

  return (
    <div className="App">
      <header className="App-header">
      <img src={props.turnOn?lighton:lightoff} className="App-lighton" alt="lighton" />
        
        <br></br><br></br>
        <button onClick={() => props.setTurnOn(!props.turnOn)}>{props.turnOn?'Turn On':'Turn Off'}</button>
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

export default Lamp;