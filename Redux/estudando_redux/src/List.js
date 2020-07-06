import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

// A função mapStateToProps, auto-descritiva, 
// mapeia as entidades armazenadas nos estados para uma props
const mapStateToProps = state => ({
  list: state.listReducer});

  /* 
  No nosso caso, queremos acessar os dados providos pelo reducer 
  listReducer, portanto basta acessar o caminho do state com o reducer
  desejado e nomear a prop que o receberá (no caso, chamamos de list).
  */
export default connect(mapStateToProps)(List);
/* 
Por último, conectamos o Redux ao componente, fazendo uso do connect. 
Como visto anteriormente, o connect tem o seguinte formato: connect()(). 
Como no caso estamos fazendo apenas leitura dos dados, basta passar a função
mapStateToProps no primeiro parênteses e o componente no segundo.
*/

