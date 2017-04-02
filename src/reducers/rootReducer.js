import { combineReducers } from 'redux';
import movieReducer from './Home';
import popularMovieReducer from './Popular';
import topRatedMovieReducer from './TopRated';
import upcomingMovieReducer from './Upcoming';
import genreReducer from './Genre';

const rootReducer = combineReducers({
  nowShowing: movieReducer,
  popular: popularMovieReducer,
  topRated: topRatedMovieReducer,
  upcoming: upcomingMovieReducer,
  genre: genreReducer
})

export default rootReducer;
