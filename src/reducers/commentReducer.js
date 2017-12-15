import {
  ADD_NEW_COMMENT_FAILURE,
  ADD_NEW_COMMENT_SUCCESS,
  RECEIVE_COMMENTS_FAIL,
  RECEIVE_COMMENTS_SUCCESS,
  TOGGLE_COMMENT_EDIT_TO_VIEW,
  TOGGLE_COMMENT_VIEW_TO_EDIT,
} from '../actions/commentActions';

const initialState = {
  commentStatus: {
    error: false,
    loading: true,
    commentEditViewToggle: false,
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
    case ADD_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
        commentStatus: {
          error: false,
          loading: false,
        },
      };
    case ADD_NEW_COMMENT_FAILURE:
      return {
        ...state,
        commentStatus: {
          error: false,
          loading: false,
          errorAddComment: true,
        },
      };
    case TOGGLE_COMMENT_VIEW_TO_EDIT:
      return {
        ...state,
        commentStatus: {
          error: false,
          loading: false,
          commentEditViewToggle: true,
          commentIdForEditing: action.payload.id,
        },
      };
    case TOGGLE_COMMENT_EDIT_TO_VIEW:
      return {
        ...state,
        commentStatus: {
          error: false,
          loading: false,
          commentEditViewToggle: false,
          commentIdForEditing: action.payload.id,
        },
      };
    default:
      return state;
  }
};

export default comments;
