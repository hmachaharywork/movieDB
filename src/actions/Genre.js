import * as types from './actionTypes';
import Api from '../api/apiCall';

export const fetchGenre = (genre) => ({
  type: types.FETCH_GENRE,
  genre
});

export function loadGenre(url) {
  return function(dispatch, getState) {
    let { genre } = getState();

    if(genre.length > 0) {
      return;
    }
    
    return Api.getData(url).then(data => {
      dispatch(fetchGenre(data.genres));
    }).catch(error => {
      throw(error);
    });
  };
}
