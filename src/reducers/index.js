import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import subreddits from './subreddits';

export default combineReducers({
  routing: routerReducer,

  subreddits
});
