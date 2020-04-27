import React, {useState} from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="counter">
          <h1>Счётчик</h1>
          <div className="input">
              <input onChange={(e) => console.log(e)}/>
          </div>
      </div>
    </div>
  );
}

export default App;
