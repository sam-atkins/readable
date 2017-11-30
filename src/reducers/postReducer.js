import {
  FAIL_ADD_NEW_POST,
  FAIL_FETCH_POSTS,
  SUCCESS_ADD_NEW_POST,
  SUCCESS_RECEIVE_POSTS,
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
    case SUCCESS_RECEIVE_POSTS:
      return {
        ...posts.reduce((newObj, p) => ({ ...newObj, [p.id]: p }), {}),
        postStatus: {
          error: false,
          loading: false,
        },
      };
    case FAIL_FETCH_POSTS:
      return {
        ...posts,
        postStatus: {
          error: true,
          loading: false,
        },
      };
    case SUCCESS_ADD_NEW_POST:
      return {
        // spread in state or posts?
        ...state,
        [action.post.id]: action.post,
      };
    case FAIL_ADD_NEW_POST:
      return {
        ...state,
        addPostStatus: {
          error: true,
        },
      };
    default:
      return state;
  }
};

export default post;
