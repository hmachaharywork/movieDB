import { combineReducers } from 'redux';
import movieReducer from './Home';

const rootReducer = combineReducers({
  nowShowing: movieReducer
})

export default rootReducer;
