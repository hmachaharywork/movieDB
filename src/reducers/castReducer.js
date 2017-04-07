import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function castReducer(state = initialState().casts, action) {
  switch(action.type) {
    case types.FETCH_CASTS_REQUEST:
      return state;
    case types.FETCH_CASTS_SUCCESS:
      //console.log(action.data);
      return {
        cast: [...action.data.cast],
        crew: [...action.data.crew]
      }
    default:
      return state;
  }
}
