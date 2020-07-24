import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import renderWithRedux from './helpers/renderWithRedux';

describe('clients enrollment', () => { // criar o comp App navegável
  const renderAppWithRouter = (inicialEntries = ['/']) => (
    <Router history = {createMemoryHistory({inicialEntries})}>
      <App />
    </Router>
  );
  test('renders the inicial page (home)', () => {
    const { getByTest } = renderWithRedux(
      renderAppWithRouter(),
      { inicialState: { cadastrarReducer: [], loginReducer: {} }}
    );

    const greetingText = getByText('Bem-vindo ao sistema de cadastramento!');
    expect(greetingText).toBeInTheDocument();
  })
})

