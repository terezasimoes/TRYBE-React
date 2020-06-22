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

  // 1 - assim que a página for renderizada, uma primeira requisição deve acontecer, 
  // e a imagem deve ser mostrada na tela;
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
      console.log(dadosJson)
      this.setState({ dog: dadosJson })
    });
  }


  // 4 - a cada tentativa de atualização do componente, verifique se o campo message tem a string terrier. 
  // Se sim, não atualize o componente;
  shouldComponentUpdate(nextProps, nextState) {
    // o shouldComUpdate possibilita autorizar ou não o componente a atualizar;
    if (nextState.dog.message.includes("terrier")) {
      return false;
    }
    return true;
  }
  // durante o processo de atualização, o método render é chamado novamente. 
  // Isso acontece porque, quando se atualiza uma props ou estado, o React “pede” 
  // que o componente seja renderizado no DOM. Como apresentamos acima, caso seja válido, 
  // podemos impedir essa renderização retornando false com o método shouldComponentUpdate.

  // 5 - guarde a url da última imagem gerada no localStorage após cada atualização.
  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.dog.message);
    const dogBreed = this.state.dog.message.split("/")[4];
    alert(dogBreed);
  }

  render() {
    // 2 - enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;
    if(this.state.dog === '') return <h1>Loading...</h1>
    return (
      <div>
        <h2>Doguinhos</h2>
        {/* deve existir um botão que, para cada clique, busque mais um doguinho. */}
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
