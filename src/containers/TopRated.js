import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieThumbnails from '../components/MovieThumbnails';
import { loadTopRated } from '../actions/TopRated';
import { sortMoviesByRate } from '../utils/utility';
import { API_KEY } from '../api/apiCall';

class TopRated extends Component {

  componentDidMount() {
    this.props.dispatch(loadTopRated('movie/top_rated?'+ API_KEY +'&language=en-US&page=' + this.props.page));
  }


  render() {
    let { genre, isFetching, topRatedMovies } = this.props;
    if(isFetching) {
      return <div className="spinner"><img className="gif" src="spinner.gif" alt="spinner" /></div>;
    }else{
      return (
        <div>
          <div><h3>Top Rated Movies</h3></div>
          <MovieThumbnails genre={genre} movies={topRatedMovies} />
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
    topRatedMovies: sortMoviesByRate(topRatedMovies),
    isFetching
  }
}

export default connect(mapStateToProps)(TopRated);
