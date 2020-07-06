import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

export default combineReducers({
  movieReducer
});

// no combineReducers vc passa um ob. onde cada prop vc passa o seu reducer
