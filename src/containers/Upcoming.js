import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUpcomingMovies, upcomingMovieRequest, upcomingMovieClear} from '../actions/Upcoming';
import MovieThumbnails from '../components/MovieThumbnails';
import { sortMoviesAsc } from '../utils/utility';

class Upcoming extends Component {

  componentDidMount() {
    let { page, dispatch } = this.props;
    dispatch(upcomingMovieRequest());
    dispatch(loadUpcomingMovies('movie/upcoming?language=en-US&page=' + page +'&region=IN'))
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
    dispatch(upcomingMovieClear());
  }

  render() {
    let { genre, upcomingMovies, isFetching } = this.props;
    let sortedMovies = sortMoviesAsc(upcomingMovies);
    if(isFetching) {
      return <h1>Loading...</h1>;
    }else {
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
  let { isFetching, upcomingMovies, page } = state.upcoming;

  return {
    genre,
    isFetching,
    upcomingMovies,
    page
  }
}

export default connect(mapStateToProps)(Upcoming);
