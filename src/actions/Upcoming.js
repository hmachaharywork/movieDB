import * as types from './actionTypes';
import Api from '../api/apiCall';

export const upcomingMovieRequest = () => ({
  type: types.FETCH_UPCOMING_MOVIE_REQUEST
});

export const upcomingMovieSuccess = (movies) => ({
  type: types.FETCH_UPCOMING_MOVIE_SUCCESS,
  movies
});

export const upcomingMovieClear = () => ({
  type: types.FETCH_UPCOMING_MOVIE_CLEAR,
});

export function loadUpcomingMovies(url) {
  return function(dispatch) {
    return Api.getData(url).then(movies => {
      dispatch(upcomingMovieSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}
