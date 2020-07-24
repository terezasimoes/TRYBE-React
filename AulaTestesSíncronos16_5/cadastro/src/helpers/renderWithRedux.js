import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import reducers  from '../redux/reducers';

const renderWithRedux = (
  component, // 1º parametro
  { initialState, store = createStore(reducers, initialState) } = {}, // 2º parametro objeto opicional
) => {
  return {
    ...render(
    <Provider store={store}>
      {component}
    </Provider>),
    store,
  };
};

export default renderWithRedux;
