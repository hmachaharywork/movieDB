import * as types from './actionTypes';
import Api from '../api/apiCall';

const popularMovieRequest = () => ({
  type: types.FETCH_POPULAR_MOVIE_REQUEST
});

const popularMovieSuccess = (movies) => ({
  type: types.FETCH_POPULAR_MOVIE_SUCCESS,
  movies
});


export function loadPopular(url) {
  return function(dispatch, getState) {
    let { popularMovies } = getState().popular;

    if(popularMovies.length > 0) {
      return;
    }

    dispatch(popularMovieRequest());

    return Api.getData(url).then(data => {
      dispatch(popularMovieSuccess(data.results));
    }).catch(error => {
      throw(error);
    });
  };
}
