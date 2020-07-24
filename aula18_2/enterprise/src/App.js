import React from 'react';
import './App.css';
import Panel from './components/Panel.jsx'
import { Provider } from './components/EnterpriseContext'

function App() {
  return (
    <Provider>
      <Panel />
    </Provider>
  );
}

export default App;
