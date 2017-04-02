import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carousel from '../components/Carousel';
import MovieThumbnails from '../components/MovieThumbnails';
import { sortMoviesByDate } from '../utils/utility';
import { loadMovies, nowShowingRequest, nowShowingClear } from '../actions/Home';
import { loadGenre } from '../actions/Genre';

class Home extends Component {

  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(nowShowingRequest());
    dispatch(loadMovies('movie/now_playing?language=en-US&page=1&region=IN'));
    dispatch(loadGenre('genre/movie/list?language=en-US'));
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
      dispatch(nowShowingClear());
  }

  render() {
    let { movies, isLoading, genre } = this.props;
    let sortedMovies = sortMoviesByDate(movies);

    if(isLoading){
      return <h1>Loading...</h1>;
    }else {
      return (
        <div>
          <Carousel />
          <MovieThumbnails genre={genre} movies={sortedMovies} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  let { genre } = state;
  let { inTheatre, isLoading } = state.nowShowing;
  return {
    genre,
    isLoading,
    movies: inTheatre
  };
}

export default connect(mapStateToProps)(Home);
