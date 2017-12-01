import { getPosts, persistPost } from '../utils/api';
// import { createRandomID } from '../utils/utils';

export const SUCCESS_RECEIVE_POSTS = 'SUCCESS_RECEIVE_POSTS';
export const receivePosts = posts => ({
  type: SUCCESS_RECEIVE_POSTS,
  posts,
});

export const FAIL_FETCH_POSTS = 'FAIL_FETCH_POSTS';
export const errorReceivingPosts = () => ({
  type: FAIL_FETCH_POSTS,
});

export const fetchPosts = () => dispatch =>
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(error => dispatch(errorReceivingPosts(error)));

export const REQUEST_ADD_NEW_POST = 'REQUEST_ADD_NEW_POST';
export const requestAddPost = () => ({
  type: REQUEST_ADD_NEW_POST,
});

export const SUCCESS_ADD_NEW_POST = 'SUCCESS_ADD_NEW_POST';
export const addPostSuccess = posts => ({
  type: SUCCESS_ADD_NEW_POST,
  posts,
});

export const FAIL_ADD_NEW_POST = 'FAIL_ADD_NEW_POST';
export const addPostError = () => ({
  type: FAIL_ADD_NEW_POST,
});

export const addNewPost = payload => dispatch => (
  persistPost(payload)
    .then(response => dispatch(addPostSuccess(response)))
);
