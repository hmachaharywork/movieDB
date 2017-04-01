import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function popularMovieReducer(state = initialState().popular, action) {
  switch(action.type) {
    case types.FETCH_POPULAR_MOVIE_REQUEST:
      return state;
    case types.FETCH_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        popularMovies: [
          ...state.popularMovies,
          ...action.movies
        ],
        isFetching: false,
        page: state.page + 1
      }
    case types.FETCH_POPULAR_MOVIE_CLEAR:
    return {
      popularMovies: [],
      isFetching: true,
      page: 1
    }
    default:
      return state;
  }
}
