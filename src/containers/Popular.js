import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieThumbnails from '../components/MovieThumbnails';
import { loadPopular } from '../actions/Popular';
import { sortMoviesByRate } from '../utils/utility';


class Popular extends Component {

  componentDidMount() {
    this.props.dispatch(loadPopular('movie/popular?language=en-US&page=' + this.props.page));
  }


  render() {
    let { genre, isFetching, popularMovies } = this.props;
    if(isFetching) {
      return <h1>Loading...</h1>;
    }else{
      return (
        <div>
          <div><h3>Popular Movies</h3></div>
          <MovieThumbnails genre={genre} movies={popularMovies} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  let { genre } = state;
  let { isFetching, popularMovies, page } = state.popular;
  return {
    genre,
    page,
    popularMovies: sortMoviesByRate(popularMovies),
    isFetching
  }
}

export default connect(mapStateToProps)(Popular);
