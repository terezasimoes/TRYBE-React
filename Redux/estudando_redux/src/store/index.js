import { createStore, combineReducers } from 'redux';
import listReducer from '../reducer';


const rootReducer = combineReducers({listReducer})

const store = createStore(rootReducer);// deve receber um reducer

export default store;

/*
Utilizamos também o método combineReducers que, 
como diz seu nome, combina reducers. 
Ele deve receber um objeto com os reducers criados. 
SEM ELE, SÓ PORDERIAMOS USAR UM REDUCER POR APLICAÇAO.
*/