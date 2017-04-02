import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieThumbnails from '../components/MovieThumbnails';
import { loadTopRated, topRatedMovieRequest, topRatedMovieClear } from '../actions/TopRated';
import { sortMoviesByRate } from '../utils/utility';


class TopRated extends Component {

  componentDidMount() {
    let {dispatch, page} = this.props;
    dispatch(topRatedMovieRequest());
    dispatch(loadTopRated('movie/top_rated?language=en-US&page=' + page));
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
    dispatch(topRatedMovieClear());
  }

  render() {
    let { genre, isFetching, topRatedMovies } = this.props;
    let sortedMovies = sortMoviesByRate(topRatedMovies);
    if(isFetching) {
      return <h1>Loading...</h1>;
    }else{
      return (
        <div>
          <MovieThumbnails genre={genre} movies={sortedMovies} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  let { genre } = state;
  let { isFetching, topRatedMovies, page } = state.topRated;
  return {
    genre,
    page,
    topRatedMovies,
    isFetching
  }
}

export default connect(mapStateToProps)(TopRated);
