import * as types from './actionTypes';
import Api from '../api/apiCall';

const upcomingMovieRequest = () => ({
  type: types.FETCH_UPCOMING_MOVIE_REQUEST
});

const upcomingMovieSuccess = (movies) => ({
  type: types.FETCH_UPCOMING_MOVIE_SUCCESS,
  movies
});


export function loadUpcomingMovies(url) {
  return function(dispatch, getState) {
    let { upcomingMovies } = getState().upcoming;

    if(upcomingMovies.length > 0) {
      return;
    }

    dispatch(upcomingMovieRequest());

    return Api.getData(url).then(data => {
      dispatch(upcomingMovieSuccess(data.results));
    }).catch(error => {
      throw(error);
    });
  };
}
