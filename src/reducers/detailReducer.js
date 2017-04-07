import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function detailReducer(state = initialState().movieDetails, action) {
  switch(action.type) {
    case types.FETCH_MOVIE_DETAILS_REQUEST:
      return state;
    case types.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        data: {...action.data},
        isFetching: false
      }
    case types.CLEAR_MOVIE_DETAILS:
      return {
        data: {},
        isFetching: true
      }
    default:
      return state;
  }
}
