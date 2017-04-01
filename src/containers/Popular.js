import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieThumbnails from '../components/MovieThumbnails';
import { loadPopular, popularMovieRequest, popularMovieClear } from '../actions/Popular';
import { sortMoviesByRate } from '../utils/utility';


class Popular extends Component {

  componentWillMount() {
    let {dispatch, page} = this.props;
    dispatch(popularMovieRequest());
    dispatch(loadPopular('popular?language=en-US&page=' + page));
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
    dispatch(popularMovieClear());
  }

  render() {
    let { isFetching, popularMovies } = this.props;
    let sortedMovies = sortMoviesByRate(popularMovies);
    if(isFetching) {
      return <h1>Loading...</h1>;
    }else{
      return (
        <div>
          <MovieThumbnails movies={sortedMovies} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  let { isFetching, popularMovies, page } = state.popular;
  return {
    page,
    popularMovies,
    isFetching
  }
}

export default connect(mapStateToProps)(Popular);
