import * as actionTypes from '../actions-types/modals';

const initialState = {
  isOpen: false,
  title: undefined,
  description: undefined,
  onSend: () => {}
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MODAL_NEW_SUBREDDIT_OPEN:
      return {
        ...state,
        isOpen: true,
        title: action.payload.title,
        description: action.payload.description,
        onSend: action.payload.onSend
      };

    case actionTypes.MODAL_NEW_SUBREDDIT_CLOSE:
      return initialState;

    default: {
      return state;
    }
  }
}
