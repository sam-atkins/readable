import {
  ADD_NEW_POST_FAILURE,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_REQUEST,
  CONFIRM_DELETE_POST,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  SELECT_POST_TO_EDIT,
  TOGGLE_FORM_REDIRECT,
} from '../actions/postActions';

const initialState = {
  postStatus: {
    edit: false,
    error: false,
    loading: true,
    redirect: false,
  },
};

const post = (state = initialState, action) => {
  const { posts } = action;

  switch (action.type) {
    case RECEIVE_POSTS_SUCCESS:
      return {
        ...posts.reduce((newObj, pst) => ({ ...newObj, [pst.id]: pst }), {}),
        postStatus: {
          edit: false,
          error: false,
          loading: false,
          redirect: false,
        },
      };
    case RECEIVE_POSTS_FAILURE:
      return {
        ...posts,
        postStatus: {
          edit: false,
          error: true,
          loading: false,
          redirect: false,
        },
      };
    case ADD_NEW_POST_REQUEST:
      return {
        ...state,
        postStatus: {
          edit: false,
          error: false,
          loading: true,
          redirect: false,
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
        },
      };
    default:
      return state;
  }
};

export default post;
