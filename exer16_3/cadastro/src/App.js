// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './components/Home';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';
import Clients from './components/Clients';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/cadastrar" component={Cadastrar} />
            <Route path="/clients" component={Clients} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
