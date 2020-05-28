import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = ['ganharLoteria', 'ViajarBrasil', 'ViajarAfrica', 'ViajarAsia', 'ViajarEuropa'];
const tarefas = compromissos.map(tarefa => task(tarefa))

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {task('comprar bolo de aniverário')}
      <ul>{compromissos.map(compromissos => <li>{compromissos}</li>)}</ul> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {tarefas}
      </header>
    </div>
  );
}

export default App;
