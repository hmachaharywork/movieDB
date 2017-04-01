import { combineReducers } from 'redux';
import movieReducer from './Home';
import popularMovieReducer from './Popular';
import topRatedMovieReducer from './TopRated';
import upcomingMovieReducer from './Upcoming';

const rootReducer = combineReducers({
  nowShowing: movieReducer,
  popular: popularMovieReducer,
  topRated: topRatedMovieReducer,
  upcoming: upcomingMovieReducer
})

export default rootReducer;
