import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';

function App() {
  const [guess, setGuess] = useState("");

  const handleChange = e => {
    setGuess(e.target.value)
  }


  return (
    <div className="VEVO GUESSER">
      <h1 className="title">
        VEVO GUESSER
      </h1>
      <header className="App-header">
        <div>
          *replace with screen grab*
        </div>
        <form className="challengeBox">
          <label className="inputBox">
            Your guess: <input className="guessBox" type ="text" onChange={handleChange} />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
