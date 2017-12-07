import {
  ADD_NEW_POST_FAILURE,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_REQUEST,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  TOGGLE_FORM_REDIRECT,
} from '../actions/postActions';

const initialState = {
  postStatus: {
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
          error: false,
          loading: false,
          redirect: false,
        },
      };
    case RECEIVE_POSTS_FAILURE:
      return {
        ...posts,
        postStatus: {
          error: true,
          loading: false,
          redirect: false,
        },
      };
    case ADD_NEW_POST_REQUEST:
      return {
        ...state,
        postStatus: {
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
          error: false,
          loading: false,
          redirect: true,
        },
      };
    case ADD_NEW_POST_FAILURE:
      return {
        ...state,
        postStatus: {
          error: true,
          loading: false,
          redirect: false,
        },
      };
    case TOGGLE_FORM_REDIRECT:
      return {
        ...state,
        postStatus: {
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
