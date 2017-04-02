import * as types from './actionTypes';
import Api from '../api/apiCall';

export const nowShowingRequest = () => ({
  type: types.FETCH_INTHEATRE_MOVIE_REQUEST
});

export const nowShowingSuccess = (movies) => ({
  type: types.FETCH_INTHEATRE_MOVIE_SUCCESS,
  movies
});

export const nowShowingClear = () => ({
  type: types.FETCH_INTHEATRE_MOVIE_CLEAR
});

export function loadMovies(url) {
  return function(dispatch) {
    return Api.getData(url).then(data => {
      dispatch(nowShowingSuccess(data.results));
    }).catch(error => {
      throw(error);
    });
  };
}
