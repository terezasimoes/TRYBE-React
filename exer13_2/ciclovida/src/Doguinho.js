import React from 'react';

// componentes são montados em tela, podem sofrer alterações e no fim são desmontados.

class Doguinho extends React.Component {
  // método constructor é a primeira função executada no componente.
  constructor(props) { // props recebidas para o compontente mãe
    super(props);
    this.state = {
      dog: '',
    }
    this.fetchApiDog = this.fetchApiDog.bind(this);
  }

  componentDidMount() {
    this.fetchApiDog();
  }
  // componenteDidMount chamado após o render indica que a renderização inicial do nosso 
  // componente foi finalizada, é o local recomendado para fazer qualquer processo
  // assíncrono ou de efeito colateral como chamadas à API, referenciar componentes
  // criados no render ou inclusive alterar o estado, disparando uma nova atualização 
  // no fluxo do componente.


  fetchApiDog() { // qndo a fn assíncrona é chamada ela me retorna uma promisse
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json()) // qnd a promisse é resolvida com o valor retornado.
    // .then((response) => console.log(response))// Um objeto contendo algumas informações sobre requisição de API.
    .then(dadosJson => {
      this.setState({ dog: dadosJson })
    });
  }

  render() {
    if(this.state.dog === '') return <h1>Loading...</h1>
    return (
      <div>
        <h2>Doguinhos</h2>
        <button onClick={this.fetchApiDog}>Novo doguinho!</button>
        <hr></hr>
        <div>
        <img src={this.state.dog.message} /> 
        </div>
        <hr></hr>
      </div>

    )
  }
}

export default Doguinho;
