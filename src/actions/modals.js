import * as actionTypes from '../actions-types/modals.js';

export const handleModalNewSubredditOpen = (title, description, onSend) => ({
  type: actionTypes.MODAL_NEW_SUBREDDIT_OPEN,
  payload: { title, description, onSend }
});

export const handleModalNewSubredditClose = () => ({
  type: actionTypes.MODAL_NEW_SUBREDDIT_CLOSE
});
