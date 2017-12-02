import {
  ADD_NEW_POST_FAILURE,
  ADD_NEW_POST_SUCCESS,
  REQUEST_ADD_NEW_POST,
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
        ...posts.reduce((newObj, p) => ({ ...newObj, [p.id]: p }), {}),
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
    case REQUEST_ADD_NEW_POST:
      return {
        ...posts,
        postStatus: {
          error: false,
          loading: true,
        },
      };
    case ADD_NEW_POST_SUCCESS:
      return {
        ...posts,
        [posts.id]: posts,
        postStatus: {
          error: false,
          loading: false,
        },
      };
    case ADD_NEW_POST_FAILURE:
      return {
        ...posts,
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
