import { combineReducers }  from 'redux';
import cadastrarReducer  from './cadastrarReducer';
import loginReducer  from './loginReducer';


const reducers = combineReducers({
  cadastrarReducer,
  loginReducer
});

export default reducers;