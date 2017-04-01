import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function upcomingMovieReducer(state = initialState().upcoming, action) {
  switch(action.type) {
    case types.FETCH_UPCOMING_MOVIE_REQUEST:
      return state;
    case types.FETCH_UPCOMING_MOVIE_SUCCESS:
      return {
        ...state,
        upcomingMovies: [
          ...state.upcomingMovies,
          ...action.movies
        ],
        isFetching: false,
        page: state.page + 1
      }
    case types.FETCH_UPCOMING_MOVIE_CLEAR:
    return {
      upcomingMovies: [],
      isFetching: true,
      page: 1
    }
    default:
      return state;
  }
}
