import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email:'',
      cpf: '',
      address: '',
      city: '',
    }
    // fazer o bind no construtor pq o construtor é chamado uma vez
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(event) { // quando tenho onChange tenho acesso ao evento
    // e tendo acesso ao evento tb tenho acesso ao target ou
    // seja, qual elemento sofre o evento(no caso o input) e dentro do input 
    // quero pegar o valor
    this.setState({
      name: event.target.value.toUpperCase(),
      // O dono da informaçao é o estado do componente
    })
  }

  // changeEmail = (event) => {
  //   const input = event.target;
  //   this.setState ({
  //     email: input.value,
  //   })
  // }

  // changeCpf = (event) => {
  //   const input = event.target;
  //   this.setState ({
  //     cpf: input.value,
  //   })
  // }

  handleChangeInput = (event) => {
    const {name, value } = event.target; // tenho nome e valor no input
    this.setState ({
      [name]: value, // defino qual chave quero acessar e a chave recebe o valor atualizado
    });
  }

  chengeAddress = (event) => {
    const { value } = event.target;
    this.setState({
      address: value.replace(/[ˆ\w\s]/gi, ''),
    });
  }

  handleCityName = (event) => {
    // let { value } = event.target;

    // if(value.match(/^\d/)) value = '',
    // this.setState({
    //   city: value,
    // });
  let { name, value } = event.target;

  if(name === 'city') value = value.match(/^\d/) ? '' : value

  this.updateState(name, value)
  }

  render() {
    return (
      <div className="App">
        <form> 
          <fieldset>
            <legend>Dados Pessoais</legend>
            <div>
              Nome:
              <input 
              type="text"
              name="name"
              maxLength="40"
              required
              value={this.state.name} // estado inicial da linha 9
              onChange={this.changeName} // só chamo a funçao SEM EXECUÇAO
              // o THIS guarda o objeto que chamou o método, mas quando o chamo aqui no evento ele nao 
              // pertence ao objeto, necessitando do .bind(this) para ser chamado pelo objeto e dessa forma
              // consigo atualizar o estado.
              // O THIS GUARDA O OBJETO PELO QUAL ELE É CHAMADO
              />
              </div>
              <div>
              Email:
              <input 
              type="email"
              name="email"
              maxLength="50"
              required
              value={this.state.email} 
              onChange={this.handleChangeInput} 
              />
            </div>
              <div>
              CPF
              <input 
              type="text"
              name="cpf"
              maxLength="11"
              required
              value={this.state.cpf} 
              onChange={this.handleChangeInput} 
              />
            </div>
            <div>
              Address
              <input 
              type="text"
              name="adress"
              maxLength="200"
              required
              value={this.state.address} 
              onChange={this.chengeAddress} 
              />
            </div>
            <div>
              Cidade
              <input 
              type="text"
              name="city"
              maxLength="28"
              required
              value={this.state.city} 
              onChange={this.handleChangeInput} 
              onBlur={this.handleCityName}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
  
}

export default App;
