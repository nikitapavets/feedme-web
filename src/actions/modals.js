import request from '../lib/request';

import * as actionTypes from '../actions-types/modals.js';

export const handleModalNewSubredditOpen = title => ({
  type: actionTypes.MODAL_NEW_SUBREDDIT_OPEN,
  payload: { title }
});

export const handleModalNewSubredditClose = () => ({
  type: actionTypes.MODAL_NEW_SUBREDDIT_CLOSE
});
