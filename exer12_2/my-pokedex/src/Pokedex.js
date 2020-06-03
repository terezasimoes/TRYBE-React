import React from 'react';
import Pokemom from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className = "pokedex">
        {this.props.pokemons.map((elem) => 
          <Pokemom key = {elem.id}  objetoMon = {elem} />)}
      </div>
    );
  }
}

export default Pokedex;