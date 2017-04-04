import * as types from './actionTypes';
import Api from '../api/apiCall';

const nowShowingRequest = () => ({
  type: types.FETCH_INTHEATRE_MOVIE_REQUEST
});

const nowShowingSuccess = (movies) => ({
  type: types.FETCH_INTHEATRE_MOVIE_SUCCESS,
  movies
});


export function loadMovies(url) {

  return function(dispatch, getState) {
    let { inTheatre } = getState().nowShowing;

    if(inTheatre.length > 0) {
      return;
    }

    dispatch(nowShowingRequest());

    return Api.getData(url).then(
      data => {
        dispatch(nowShowingSuccess(data.results));
    }).catch(error => {
      throw(error);
    });
  };
}
