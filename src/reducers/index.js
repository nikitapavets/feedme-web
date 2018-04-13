import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import subreddits from './subreddits';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,

  subreddits
});
