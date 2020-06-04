import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map(elemArrData => <Pokemon key={elemArrData.id} propPokms={elemArrData} />)}
            </div>
        );
    }
}

export default Pokedex;
