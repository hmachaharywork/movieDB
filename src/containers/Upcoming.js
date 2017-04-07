import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUpcomingMovies } from '../actions/Upcoming';
import MovieThumbnails from '../components/MovieThumbnails';
import { sortMoviesAsc } from '../utils/utility';
import { API_KEY } from '../api/apiCall';

class Upcoming extends Component {

  componentDidMount() {
    this.props.dispatch(loadUpcomingMovies('movie/upcoming?'+ API_KEY +'&language=en-US&page=' + this.props.page +'&region=IN'))
  }

  render() {
    let { genre, upcomingMovies, isFetching } = this.props;
    if(isFetching) {
      return <div className="spinner"><img className="gif" src="spinner.gif" alt="spinner" /></div>;
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
