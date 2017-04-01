import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function topRatedMovieReducer(state = initialState().topRated, action) {
  switch(action.type) {
    case types.FETCH_TOP_RATED_MOVIE_REQUEST:
      return state;
    case types.FETCH_TOP_RATED_MOVIE_SUCCESS:
      return {
        ...state,
        topRatedMovies: [
          ...state.topRatedMovies,
          ...action.movies
        ],
        isFetching: false,
        page: state.page + 1
      }
    case types.FETCH_TOP_RATED_MOVIE_CLEAR:
    return {
      topRatedMovies: [],
      isFetching: true,
      page: 1
    }
    default:
      return state;
  }
}
