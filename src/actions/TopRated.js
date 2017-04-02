import * as types from './actionTypes';
import Api from '../api/apiCall';

export const topRatedMovieRequest = () => ({
  type: types.FETCH_TOP_RATED_MOVIE_REQUEST
});

export const topRatedMovieSuccess = (movies) => ({
  type: types.FETCH_TOP_RATED_MOVIE_SUCCESS,
  movies
});

export const topRatedMovieClear = () => ({
  type: types.FETCH_TOP_RATED_MOVIE_CLEAR,
});

export function loadTopRated(url) {
  return function(dispatch) {
    return Api.getData(url).then(data => {
      dispatch(topRatedMovieSuccess(data.results));
    }).catch(error => {
      throw(error);
    });
  };
}
