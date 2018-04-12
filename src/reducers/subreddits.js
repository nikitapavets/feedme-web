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

    case actionTypes.SUBREDDIT_REQUEST:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          isLoading: true
        }
      };

    case actionTypes.SUBREDDIT_SUCCESS: {
      const { subreddit } = action.payload;
      let subredditIndex = state.list.findIndex(_ => _.name === subreddit.name);
      let newList = state.list;
      if (subredditIndex !== -1) {
        newList[subredditIndex] = {
          ...newList[subredditIndex],
          ...subreddit
        };
      } else {
        newList[0] = {
          ...subreddit,
          filterVisible: true,
          isInitialLoading: false
        };
      }

      return {
        ...state,
        pagination: {
          ...state.pagination,
          isLoading: false
        },
        list: newList
      };
    }

    case actionTypes.SUBREDDIT_FAILURE: {
      return {
        ...state,
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
