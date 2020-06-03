import React from 'react';
import logo from './logo.svg';
import Greet from './Greet';
import './App.css';
import data from './data'
import Pokedex from './Pokedex'
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemons = {data} />
      {/* Na linha 13 a props pokemons é criada recebendo array do arquivo data.js como parâmetro*/}
    </div> 
  );
}

{/*       PARA ENTENDER PROPS  

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" />
      <p>This is childrem props</p>

      <Greet name="Clark" heroName="Superman" />
      <button>Action</button>

      <Greet name="Diana" heroName="Wonder woman"/>

      <Welcome name="Bruce" heroName="Batman" />

      <Welcome name="Clark" heroName="Superman" />
      
      <Welcome name="Diana" heroName="Wonder woman"/>
    </div>
    
  );
}*/}

export default App;
