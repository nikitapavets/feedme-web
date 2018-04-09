import * as actionTypes from '../actions-types/subreddits';

const initialState = {
  isInitialLoading: true,
  pagination: {
    current: 0,
    last: 0,
    isLoading: true
  },
  list: []
};

export default function subreddits(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUBREDDITS_REQUEST:
      return {
        ...state,
        isInitialLoading: state.pagination.current === 0,
        pagination: {
          ...state.pagination,
          isLoading: true
        }
      };

    case actionTypes.SUBREDDITS_SUCCESS: {
      const { subreddits } = action.payload;

      return {
        ...state,
        isInitialLoading: false,
        pagination: {
          ...state.pagination,
          current: subreddits.current_page,
          last: subreddits.last_page,
          isLoading: false
        },
        list: [
          ...state.list,
          ...subreddits.data.map(subreddit => ({
            ...subreddit,
            filterVisible: true,
            isInitialLoading: true,
            pagination: {
              current: 0,
              last: 0,
              isLoading: true
            },
            posts: []
          }))
        ]
      };
    }

    case actionTypes.SUBREDDITS_FAILURE: {
      return {
        ...state,
        isInitialLoading: false,
        error: action.payload,
        pagination: {
          ...state.pagination,
          isLoading: false
        }
      };
    }

    default: {
      return state;
    }
  }
}
