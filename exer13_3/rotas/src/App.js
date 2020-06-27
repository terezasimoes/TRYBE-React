import React from 'react';
import './App.css';
// import rotas from './rotas'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
//Importar as páginas
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Link to="/" > Home </Link>
      <Link to="/about" > About </Link>
      <Link to="/users" > Users </Link>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
      </Switch>        
  </BrowserRouter>
    );
  }
}

export default App;

// O componente Switch é usado para encapsular um conjunto de rotas que você definiu via Route
//<Switch>
{/* <Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/movies" component={Movies} />
<Route path="/" component={Home} />
</Switch>
 */}