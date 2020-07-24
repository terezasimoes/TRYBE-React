import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Clients extends React.Component {
  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/cadastrar">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/cadastrar">Cadastre outros!</Link>
        <div>
          {registers.map((register, index) => {
            return (
              <div key={register.email}>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {register.nome}</p>
                <p>Idade: {register.idade}</p>
                <p>Email: {register.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registers: state.cadastrarReducer,
  userLogin: state.loginReducer});

export default connect(mapStateToProps)(Clients);