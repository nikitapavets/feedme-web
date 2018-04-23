import * as actionTypes from '../actions-types/modals';

const initialState = {
  isOpen: false,
  title: undefined
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MODAL_NEW_SUBREDDIT_OPEN:
      return {
        ...state,
        isOpen: true,
        title: action.payload.title
      };

    case actionTypes.MODAL_NEW_SUBREDDIT_CLOSE:
      return {
        ...state,
        isOpen: false,
        title: initialState.title
      };

    default: {
      return state;
    }
  }
}
