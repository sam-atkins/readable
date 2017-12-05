import {
  ADD_NEW_POST_FAILURE,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_REQUEST,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
} from '../actions/postActions';

const initialState = {
  postStatus: {
    error: false,
    loading: true,
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
        },
      };
    case RECEIVE_POSTS_FAILURE:
      return {
        ...posts,
        postStatus: {
          error: true,
          loading: false,
        },
      };
    case ADD_NEW_POST_REQUEST:
      return {
        ...state,
        postStatus: {
          error: false,
          loading: true,
        },
      };
    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
        postStatus: {
          error: false,
          loading: false,
        },
      };
    case ADD_NEW_POST_FAILURE:
      return {
        ...state,
        postStatus: {
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default post;
