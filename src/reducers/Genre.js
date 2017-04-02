import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function genreReducer(state = initialState().genre, action) {
  switch(action.type) {
    case types.FETCH_GENRE:
      return [
        ...action.genre
      ];
    default:
      return state;
  }
}
