import { applyMiddleware, createStore } from 'redux';
//açao passa primeiro pelo middkeware e depois passa pelo thunk e este repassa para o store
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
