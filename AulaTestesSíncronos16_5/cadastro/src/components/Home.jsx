import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Sistema de Casdastramento</h3>
        <Link to="/login">Fazer Login</Link>
      </div>
    )
  }
}

export default Home;