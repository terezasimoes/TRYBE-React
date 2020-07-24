import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/actionsTypes';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    }
  }

  render() {
    const { email, senha } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => this.setState({email: e.target.value})}
            placeholder="email"
          />
          <input
            type="password"
            onChange={(e => this.setState({senha: e.target.value}))}
            placeholder="senha"
          />
        </div>
        <Link
        to="/clients"
        onClick={() =>this.props.login({email, senha}) }
        >
          Login</Link>
      </div>
    )
  }
}

const mapDispachtToProps = dispacht => ({
  login: value => dispacht(login(value))
})

export default connect(null, mapDispachtToProps)(Login);
