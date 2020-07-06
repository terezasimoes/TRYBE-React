import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from './actions';
/*
Primeiro, nós estamos definindo um estado interno do componente 
chamado textValue. Note que, apesar de estarmos usando o Redux, 
que centraliza os states, caso haja algum estado o qual não 
necessite navegar entre outros componentes, podemos declará-lo internamente.
*/ 
class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        {/* Estamos criando um input para o usuário digitar a tarefa que deseja 
        adicionar. A cada mudança no valor do input, o valor é salvo no 
        estado textValue. */}
        <button onClick={() => this.props.add(this.state.textValue)}>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}
// funcao para fazer o dispatch de uma ação para o reducer.
const mapDispatchToProps = dispatch => ({ // mapDispatchToProps mapeia os dispatchs para o props.
  add: e => dispatch(addAssignment(e))});
// a única maneira de enviarmos uma action para um reducer é fazendo seu dispatch.

export default connect(null, mapDispatchToProps)(InputsList);
/*
Por último, estamos conectando o Redux ao componente. 
Para isso, precisamos importar o método connect.

**** CONNECT ****
O método connect possui a seguinte estrutura: connect()(). 
É ele quem nos da acesso ao store do Redux.

No primeiro parênteses, devem estar presentes 
os métodos nativos do Redux. Como nesse caso estamos apenas enviando dados,
estamos passando apenas o mapDispatchToProps. O null presente no connect 
é necessário pois ele entende que o primeiro parâmetro deve ser uma função 
chamada mapStateToProps, que veremos logo a frente.

No segundo parênteses passamos nosso componente.
*/