import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Minha Lista de Componentes',
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  render() {
    return (
      <div className='main'>
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value='Título Show' />
        </MyList>
      </div>
    )
  }
}



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Welcome from './Welcome';
// import Message from './Message';
// import Counter from './Counter'
// import Pokedex from './Pokedex';
// import data from './data';

// function App() {
//   return (
//     <div className="App">
//       <h1>Pokedex</h1>
//       <Pokedex pokemons={data} />
//     </div>
//   );
// }

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
