import request from '../lib/request';

import * as actionTypes from '../actions-types/subreddits.js';

import { handleModalNewSubredditClose } from './modals';

const handleSubredditsRequest = () => ({
  type: actionTypes.SUBREDDITS_REQUEST
});

const handleSubredditsSuccess = subreddits => ({
  type: actionTypes.SUBREDDITS_SUCCESS,
  payload: { subreddits }
});

const handleSubredditsFailure = error => ({
  type: actionTypes.SUBREDDITS_FAILURE,
  payload: { error }
});

export const handleSubredditsLoad = () => dispatch => {
  dispatch(handleSubredditsRequest());

  return request({
    url: `/subreddits`,
    method: 'get'
  })
    .then(data => dispatch(handleSubredditsSuccess(data)))
    .catch(err => dispatch(handleSubredditsFailure(err)));
};

const handleSubredditRequest = () => ({
  type: actionTypes.SUBREDDIT_REQUEST
});

const handleSubredditSuccess = subreddit => ({
  type: actionTypes.SUBREDDIT_SUCCESS,
  payload: { subreddit }
});

const handleSubredditFailure = error => ({
  type: actionTypes.SUBREDDIT_FAILURE,
  payload: { error }
});

export const handleSubredditLoad = name => dispatch => {
  dispatch(handleSubredditRequest());

  return request({
    url: `/subreddits/` + name,
    method: 'get'
  })
    .then(data => dispatch(handleSubredditSuccess(data)))
    .catch(err => dispatch(handleSubredditFailure(err)));
};

export const handleSubredditFilter = title => ({
  type: actionTypes.SUBREDDIT_FILTER,
  payload: { title }
});

const handleSubredditNewRequest = () => ({
  type: actionTypes.SUBREDDIT_NEW_REQUEST
});

const handleSubredditNewSuccess = subreddit => ({
  type: actionTypes.SUBREDDIT_NEW_SUCCESS,
  payload: { subreddit }
});

const handleSubredditNewFailure = error => ({
  type: actionTypes.SUBREDDIT_NEW_FAILURE,
  payload: { error }
});

export const handleSubredditNew = name => dispatch => {
  dispatch(handleSubredditNewRequest());

  return request({
    url: '/subreddits',
    method: 'post',
    data: { name }
  })
    .then(data => {
      dispatch(handleSubredditNewSuccess(data));
      dispatch(handleModalNewSubredditClose());
    })
    .catch(err => dispatch(handleSubredditNewFailure(err)));
};
