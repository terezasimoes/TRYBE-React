
const inicialState = {};

export default function loginReducer(state=inicialState, action) {
  switch(action.type) {
    case 'LOGIN':
      return action.value;
    default:
      return state
  }
}