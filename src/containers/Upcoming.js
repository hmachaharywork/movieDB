import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUpcomingMovies } from '../actions/Upcoming';
import MovieThumbnails from '../components/MovieThumbnails';
import { sortMoviesAsc } from '../utils/utility';

class Upcoming extends Component {

  componentDidMount() {
    this.props.dispatch(loadUpcomingMovies('movie/upcoming?language=en-US&page=' + this.props.page +'&region=IN'))
  }

  render() {
    let { genre, upcomingMovies, isFetching } = this.props;
    if(isFetching) {
      return <h1>Loading...</h1>;
    }else {
      return (
        <div>
          <div><h3>Upcoming Movies</h3></div>
          <MovieThumbnails genre={genre} movies={upcomingMovies} />
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
    upcomingMovies: sortMoviesAsc(upcomingMovies),
    page
  }
}

export default connect(mapStateToProps)(Upcoming);
