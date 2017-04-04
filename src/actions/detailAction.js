import * as types from './actionTypes';
import Api from '../api/apiCall';

const movieDetailsRequest = () => ({
  type: types.FETCH_MOVIE_DETAILS_REQUEST
});

const movieDetailsSuccess = (data) => ({
  type: types.FETCH_MOVIE_DETAILS_SUCCESS,
  data
});


export function loadMovieDetails(url) {

  return function(dispatch, getState) {
    let { data } = getState().movieDetails;

    if(data.length > 0) {
      return;
    }

    dispatch(movieDetailsRequest());

    return Api.getData(url).then(
      data => {
        dispatch(movieDetailsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
