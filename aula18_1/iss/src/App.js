import React from 'react';
//import { createContext } from 'react'; 5 - tranferido para novo arquivo
import ISSLocation from './components/ISSLocation';
import './App.css';
import ISSContext from './context/ISSContext';
import { getCurrentISSLocation } from './services/issAPI';

/* 1 - o método createContext L.2 retorna um objeto
entre eles temos acesso ao Provider e o Consume
*/
//const ISSContext = createContext() // 2 - cria e depois faça uso do provider
// 5 - transferido para pasta context

// 5 - criar componente para o consumo do estado( essa sintaxe foi transferida para o comp ISSLocation.js)
// const ShowContext = () => (
//   <ISSContext.Consumer>
//     {(context) => (
//       <span>{`o valor do contexto é ${JSON.stringify(context)}`}</span>
//     )}
//   </ISSContext.Consumer>
// )

// 4 - substituindo o que tem na redux store
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      latitude: null,
      longitude: null,
    };
    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleISSLocationFailure = this.handleISSLocationFailure.bind(this);
    this.handleISSLocationSuccess = this.handleISSLocationSuccess.bind(this);
  }

  fetchISSLocation() {
    const { isFetching } = this.state;

    if (isFetching) return null; // indicando fazendo a busca

    this.setState({ isFetching: true });
    getCurrentISSLocation()
    .then(this.handleISSLocationSuccess, this.handleISSLocationFailure);
  }

  handleISSLocationSuccess(response) {
    const {
      iss_position: { latitude, longitude }} = response;

    this.setState({
      isFetching: false,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    });
  }

  handleISSLocationFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      getCurrentISSLocation: this.fetchISSLocation,
    }; // o context depende do state. sempre q o estado é atualizado(setState) no momento posterior o render
    // é chamado o render sendo chamado eu gero o contexto e o context vem do state
    return (
      <ISSContext.Provider value={contextValue}>
        {/* 3 - vc passa para o value o que será provido, crie um objeto l.67s*/}
        <div className="App">
          <h1>International Space Station Location Tracker</h1>
          <ISSLocation />
          {/* <ShowContext /> */}
        </div>
      </ISSContext.Provider>
    );
  }
}

export default App;
