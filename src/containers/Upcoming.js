import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUpcomingMovies, upcomingMovieRequest, upcomingMovieClear} from '../actions/Upcoming';
import MovieThumbnails from '../components/MovieThumbnails';
import { sortMoviesAsc } from '../utils/utility';

class Upcoming extends Component {

  componentWillMount() {
    let { page, dispatch } = this.props;
    dispatch(upcomingMovieRequest());
    dispatch(loadUpcomingMovies('upcoming?language=en-US&page=' + page +'&region=IN'))
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
    dispatch(upcomingMovieClear());
  }

  render() {
    let { upcomingMovies, isFetching } = this.props;
    let sortedMovies = sortMoviesAsc(upcomingMovies);
    if(isFetching) {
      return <h1>Loading...</h1>;
    }else {
      return (
        <div>
          <MovieThumbnails movies={sortedMovies} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  let { isFetching, upcomingMovies, page } = state.upcoming;

  return {
    isFetching,
    upcomingMovies,
    page
  }
}

export default connect(mapStateToProps)(Upcoming);
