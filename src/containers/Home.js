import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carousel from '../components/Carousel';
import MovieThumbnails from '../components/MovieThumbnails';
import { sortMoviesByDate } from '../utils/utility';
import { loadMovies, nowShowingRequest, nowShowingClear } from '../actions/Home';

class Home extends Component {

  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(nowShowingRequest());
    dispatch(loadMovies('now_playing?language=en-US&page=1&region=IN'));
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
      dispatch(nowShowingClear());
  }

  render() {
    let { movies, isLoading } = this.props;
    let sortedMovies = sortMoviesByDate(movies);

    if(isLoading){
      return <h1>Loading...</h1>;
    }else {
      return (
        <div>
          <Carousel />
          <MovieThumbnails movies={sortedMovies} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  let { inTheatre, isLoading } = state.nowShowing;
  return {
    isLoading,
    movies: inTheatre
  };
}

export default connect(mapStateToProps)(Home);
