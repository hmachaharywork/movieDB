import * as types from './actionTypes';
import Api from '../api/apiCall';

const movieDetailsRequest = () => ({
  type: types.FETCH_MOVIE_DETAILS_REQUEST
});

const movieDetailsSuccess = (data) => ({
  type: types.FETCH_MOVIE_DETAILS_SUCCESS,
  data
});

export const clearMovieDetails = () => ({
  type: types.CLEAR_MOVIE_DETAILS
});

const castFetchRequest = () => ({
  type: types.FETCH_CASTS_REQUEST
});

const castFetchSuccess = (data) => ({
  type: types.FETCH_CASTS_SUCCESS,
  data
});


function loadMovieDetails(url) {

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

function loadCasts(url) {
  return function(dispatch, getState) {
    let { casts } = getState();

    if(casts.length > 0) {
      return;
    }

    dispatch(castFetchRequest());

    return Api.getData(url).then(
      data => {
        //console.log(data);
        dispatch(castFetchSuccess(data));
    }).catch(error => {
      throw(error);
    })
  };
}

export function loadEverything(arg1, arg2) {
  return dispatch => Promise.all([
    dispatch(loadCasts(arg1)),
    dispatch(loadMovieDetails(arg2))
  ]);
}
