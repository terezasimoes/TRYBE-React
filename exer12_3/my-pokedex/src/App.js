import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Counter from './Counter'
import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemons={data} />
    </div>
  );
}

{/*
function App() {
  return (
    <div className="App">
      <Message />
    </div>
  );
}*/}

{/*}
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}*/}


export default App;
