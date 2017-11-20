import {
  FAIL_FETCH_POSTS,
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
        ...post,
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
