import * as types from './actionTypes';
import Api from '../api/apiCall';

export const popularMovieRequest = () => ({
  type: types.FETCH_POPULAR_MOVIE_REQUEST
});

export const popularMovieSuccess = (movies) => ({
  type: types.FETCH_POPULAR_MOVIE_SUCCESS,
  movies
});

export const popularMovieClear = (error) => ({
  type: types.FETCH_POPULAR_MOVIE_CLEAR,
  error
});

export function loadPopular(url) {
  return function(dispatch) {
    return Api.getData(url).then(movies => {
      dispatch(popularMovieSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}
