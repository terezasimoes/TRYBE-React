export function selectMovie(category, movie) {
  //qnd o usuário clica (no nome do filme separado por categoria)
  return {
    type: 'SELECT_MOVIE',// TODA ACTION 'DEVE' TER O TYPE
    category,
    movie
  }
}

// lá no reducer(movieReducer) tem retornar um novo estado de category e movie
