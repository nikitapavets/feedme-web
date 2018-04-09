import request from '../lib/request';

import * as actionTypes from '../actions-types/subreddits.js';

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
