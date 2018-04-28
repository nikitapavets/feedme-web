import * as actionTypes from '../actions-types/subreddits';

const initialState = {
  isInitialLoading: true,
  alreadyLoaded: [],
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
          ...subreddits.data
            .filter(subreddit => !state.alreadyLoaded.includes(subreddit.name))
            .map(subreddit => ({
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
        newList[subredditIndex !== -1 ? subredditIndex : 0] = {
          ...(subredditIndex !== -1 ? newList[subredditIndex] : {}),
          ...{
            ...subreddit,
            posts: subreddit.posts.map(post => ({
              ...post,
              filterVisible: true,
              isInitialLoading: true
            }))
          },
          filterVisible: true,
          isInitialLoading: false
        };
      } else {
        newList[0] = {
          ...{
            ...subreddit,
            posts: subreddit.posts.map(post => ({
              ...post,
              filterVisible: true,
              isInitialLoading: true
            }))
          },
          filterVisible: true,
          isInitialLoading: false
        };
      }

      return {
        ...state,
        alreadyLoaded: [...state.alreadyLoaded, subreddit.name],
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

    case actionTypes.SUBREDDIT_FILTER: {
      const { title } = action.payload;

      return {
        ...state,
        list: [
          ...state.list.map(subreddit => {
            if (subreddit.title.includes(title)) {
              return {
                ...subreddit,
                filterVisible: true
              };
            } else {
              return {
                ...subreddit,
                filterVisible: false
              };
            }
          })
        ]
      };
    }

    case actionTypes.SUBREDDIT_NEW_SUCCESS: {
      const { subreddit } = action.payload;

      return {
        ...state,
        alreadyLoaded: [...state.alreadyLoaded, subreddit.name],
        list: [
          {
            ...subreddit,
            filterVisible: true,
            isInitialLoading: true,
            pagination: {
              current: 0,
              last: 0,
              isLoading: true
            },
            posts: []
          },
          ...state.list
        ]
      };
    }

    case actionTypes.POST_REQUEST:
      return {
        ...state
      };

    case actionTypes.POST_SUCCESS: {
      const { subredditName, post } = action.payload;
      let subredditIndex = state.list.findIndex(_ => _.name === subredditName);
      let newList = state.list;
      let newPosts = state.list[subredditIndex].posts;
      let postIndex = newPosts.findIndex(_ => _.name === post.name);
      newPosts[postIndex] = {
        ...newPosts[postIndex],
        ...post,
        isInitialLoading: false
      };
      newList[subredditIndex].posts = newPosts;

      return {
        ...state,
        list: newList
      };
    }

    case actionTypes.POST_FAILURE: {
      console.log(action.payload);
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
