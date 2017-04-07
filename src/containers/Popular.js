import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieThumbnails from '../components/MovieThumbnails';
import { loadPopular } from '../actions/Popular';
import { sortMoviesByRate } from '../utils/utility';
import { API_KEY } from '../api/apiCall';


class Popular extends Component {

  componentDidMount() {
    this.props.dispatch(loadPopular('movie/popular?'+ API_KEY +'&language=en-US&page=' + this.props.page));
  }


  render() {
    let { genre, isFetching, popularMovies } = this.props;
    if(isFetching) {
      return <div className="spinner"><img className="gif" src="spinner.gif" alt="spinner" /></div>;
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
