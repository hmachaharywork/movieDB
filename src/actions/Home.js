import * as types from './actionTypes';
import Api from '../api/apiCall';

export const nowShowingRequest = () => ({
  type: types.FETCH_INTHEATRE_MOVIE_REQUEST
});

export const nowShowingSuccess = (movies) => ({
  type: types.FETCH_INTHEATRE_MOVIE_SUCCESS,
  movies
});

export const nowShowingError = (error) => ({
  type: types.FETCH_INTHEATRE_MOVIE_ERROR,
  error
});

export function loadMovies(url) {
  return function(dispatch) {
    return Api.getData(url).then(movies => {
      dispatch(nowShowingSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}
