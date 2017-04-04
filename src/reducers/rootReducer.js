import { combineReducers } from 'redux';
import movieReducer from './Home';
import popularMovieReducer from './Popular';
import topRatedMovieReducer from './TopRated';
import upcomingMovieReducer from './Upcoming';
import detailReducer from './detailReducer';
import genreReducer from './Genre';

const rootReducer = combineReducers({
  nowShowing: movieReducer,
  popular: popularMovieReducer,
  topRated: topRatedMovieReducer,
  upcoming: upcomingMovieReducer,
  genre: genreReducer,
  movieDetails: detailReducer
})

export default rootReducer;
