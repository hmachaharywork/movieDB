import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarouselInstance from '../components/Carousel';
import MovieThumbnails from '../components/MovieThumbnails';
import { sortMoviesByDate } from '../utils/utility';
import { loadMovies } from '../actions/Home';
import { loadGenre } from '../actions/Genre';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(loadGenre('genre/movie/list?language=en-US'));
    this.props.dispatch(loadMovies('movie/now_playing?language=en-US&page=1&region=IN'));
  }

  render() {
    let { movies, isLoading, genre } = this.props;

    if(isLoading){
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <CarouselInstance movies={movies} />
        <div><h3>Now Showing</h3></div>
        <MovieThumbnails genre={genre} movies={movies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { genre } = state;
  let { inTheatre, isLoading } = state.nowShowing;
  return {
    genre,
    isLoading,
    movies: sortMoviesByDate(inTheatre)
  };
}

export default connect(mapStateToProps)(Home);
