import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function movieReducer(state = initialState().nowShowing, action) {
  switch(action.type) {
    case types.FETCH_INTHEATRE_MOVIE_REQUEST:
      return state;
    case types.FETCH_INTHEATRE_MOVIE_SUCCESS:
      return {
        ...state,
        inTheatre: action.movies,
        isLoading: false
      }
    case types.FETCH_INTHEATRE_MOVIE_CLEAR:
      return {
        ...state,
        isLoading: true,
        inTheatre: []
      }
    default:
      return state;
  }
}
