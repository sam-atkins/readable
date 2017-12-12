import {
  RECEIVE_COMMENTS_FAIL,
  RECEIVE_COMMENTS_SUCCESS,
} from '../actions/commentActions';

const initialState = {
  commentStatus: {
    error: false,
    loading: true,
  },
};

const comments = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case RECEIVE_COMMENTS_FAIL:
      return {
        ...state,
        commentStatus: {
          error: true,
          loading: false,
        },
      };
    case RECEIVE_COMMENTS_SUCCESS:
      return {
        ...state,
        ...payload.reduce(
          (newObj, comment) => ({ ...newObj, [comment.id]: comment }),
          {}
        ),
        commentStatus: {
          error: false,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default comments;
