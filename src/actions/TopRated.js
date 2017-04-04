import * as types from './actionTypes';
import Api from '../api/apiCall';

const topRatedMovieRequest = () => ({
  type: types.FETCH_TOP_RATED_MOVIE_REQUEST
});

const topRatedMovieSuccess = (movies) => ({
  type: types.FETCH_TOP_RATED_MOVIE_SUCCESS,
  movies
});


export function loadTopRated(url) {
  return function(dispatch, getState) {
    let { topRatedMovies } = getState().topRated;

    if(topRatedMovies.length > 0) {
      return;
    }

    dispatch(topRatedMovieRequest());

    return Api.getData(url).then(data => {
      dispatch(topRatedMovieSuccess(data.results));
    }).catch(error => {
      throw(error);
    });
  };
}
