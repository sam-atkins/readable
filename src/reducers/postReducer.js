import {
  ADD_NEW_POST_FAILURE,
  ADD_NEW_POST_SUCCESS,
  CANCEL_REQUEST_DELETE_POST,
  CONFIRM_DELETE_POST,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  REQUEST_DELETE_POST,
  SELECT_POST_TO_EDIT,
  SORT_BY_HIGHEST_VOTE,
  SORT_BY_LOWEST_VOTE,
  SORT_BY_NEW,
  SORT_BY_OLD,
  TOGGLE_FORM_REDIRECT,
  VOTE_POST_FAILED,
  VOTE_POST_SUCCESS,
} from '../actions/postActions';
import {
  DECREMENT_COMMENT_COUNT,
  INCREMENT_COMMENT_COUNT,
} from '../actions/commentActions';

const initialState = {
  postStatus: {
    edit: false,
    error: false,
    loading: true,
    redirect: false,
    requestDelete: false,
  },
  sortPosts: {
    sortBy: '',
  },
};

const post = (state = initialState, action) => {
  const { posts } = action;

  switch (action.type) {
    case RECEIVE_POSTS_SUCCESS:
      return {
        ...state,
        ...posts.reduce((newObj, pst) => ({ ...newObj, [pst.id]: pst }), {}),
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: false,
        },
      };
    case RECEIVE_POSTS_FAILURE:
      return {
        ...state,
        ...posts,
        postStatus: {
          edit: false,
          error: true,
          loading: false,
          redirect: false,
          requestDelete: false,
        },
      };
    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: true,
          requestDelete: false,
        },
      };
    case ADD_NEW_POST_FAILURE:
      return {
        ...state,
        postStatus: {
          edit: false,
          error: true,
          loading: false,
          redirect: false,
          requestDelete: false,
        },
      };
    case SELECT_POST_TO_EDIT:
      return {
        ...state,
        postStatus: {
          edit: true,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: false,
          postIdForEditing: action.payload,
        },
      };
    case TOGGLE_FORM_REDIRECT:
      return {
        ...state,
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: false,
        },
      };
    case CONFIRM_DELETE_POST:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: false,
        },
      };
    case REQUEST_DELETE_POST:
      return {
        ...state,
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: true,
          postIdForDeletion: action.payload,
        },
      };
    case CANCEL_REQUEST_DELETE_POST:
      return {
        ...state,
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: false,
        },
      };
    case INCREMENT_COMMENT_COUNT:
      return {
        ...state,
        [action.payload.payload.parentId]: {
          ...state[action.payload.payload.parentId],
          commentCount: state[action.payload.payload.parentId].commentCount + 1,
        },
      };
    case DECREMENT_COMMENT_COUNT:
      return {
        ...state,
        [action.payload.payload.parentId]: {
          ...state[action.payload.payload.parentId],
          commentCount: state[action.payload.payload.parentId].commentCount - 1,
        },
      };
    case VOTE_POST_SUCCESS:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: false,
          voteError: false,
        },
      };
    case VOTE_POST_FAILED:
      return {
        ...state,
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
          requestDelete: false,
          voteError: true,
        },
      };
    case SORT_BY_HIGHEST_VOTE:
      return {
        ...state,
        sortPosts: {
          sortBy: 'HIGHEST_VOTE',
        },
      };
    case SORT_BY_LOWEST_VOTE:
      return {
        ...state,
        sortPosts: {
          sortBy: 'LOWEST_VOTE',
        },
      };
    case SORT_BY_NEW:
      return {
        ...state,
        sortPosts: {
          sortBy: 'NEW',
        },
      };
    case SORT_BY_OLD:
      return {
        ...state,
        sortPosts: {
          sortBy: 'OLD',
        },
      };
    default:
      return state;
  }
};

export default post;
