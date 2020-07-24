

const inicialState = [];

export default function cadastrarReducer(state = inicialState, action) {
  switch(action.type) {
    case 'ADD_REGISTER':
    return [...state, action.data]
    default:
      return state
  }
}