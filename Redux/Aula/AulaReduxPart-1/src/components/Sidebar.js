import React from 'react';
import { connect } from 'react-redux';
import * as MovieActions from '../actions/movieAction';

const Sidebar = ({ propThatCameFromReducer, selectMovie }) => {
  return (
    <aside>
      {
        propThatCameFromReducer.map(category => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {
                category.movies.map(movie => (
                  <li key={movie.id}>{movie.title} was released in {movie.released}
                    <button type="button" onClick={() => selectMovie(category, movie)}>
                      Select
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </aside>
  )
};

// fn que acessa o state e retorna um obj onde as propriedadess denidas aqui nesse 
// objeto estarao disponiveis para o componente via props
const mapStateToProps = (state) => ({
  propThatCameFromReducer: state.movieReducer.categories,
});

// fn que envia para a store a action
const mapDispatchToProps = dispatch => ({
  selectMovie: (category, movie) => dispatch(MovieActions.selectMovie(category, movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
