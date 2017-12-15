import {
  ADD_NEW_COMMENT_FAILURE,
  ADD_NEW_COMMENT_SUCCESS,
  CANCEL_REQUEST_DELETE_COMMENT,
  CONFIRM_DELETE_COMMENT,
  FAILED_DELETE_COMMENT,
  RECEIVE_COMMENTS_FAIL,
  RECEIVE_COMMENTS_SUCCESS,
  REQUEST_DELETE_COMMENT,
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
          commentIdForEditing: action.payload,
        },
      };
    case TOGGLE_COMMENT_EDIT_TO_VIEW:
      return {
        ...state,
        commentStatus: {
          error: false,
          loading: false,
          commentEditViewToggle: false,
          commentIdForEditing: action.payload,
        },
      };
    case REQUEST_DELETE_COMMENT:
      return {
        ...state,
        commentStatus: {
          error: false,
          loading: false,
          requestDelete: true,
          postIdForDeletion: action.payload,
        },
      };
    case CANCEL_REQUEST_DELETE_COMMENT:
      return {
        ...state,
        commentStatus: {
          error: false,
          loading: false,
          requestDelete: false,
        },
      };
    case CONFIRM_DELETE_COMMENT:
      return {
        ...state,
        [action.payload.id]: { ...payload },
      };
    case FAILED_DELETE_COMMENT:
      return {
        ...state,
        commentStatus: {
          error: false,
          loading: false,
          requestDeleteError: true,
        },
      };
    default:
      return state;
  }
};

export default comments;
