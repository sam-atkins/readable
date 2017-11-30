import { getPosts, persistPost } from '../utils/api';

export const SUCCESS_RECEIVE_POSTS = 'SUCCESS_RECEIVE_POSTS';
export const FAIL_FETCH_POSTS = 'FAIL_FETCH_POSTS';
export const SUCCESS_ADD_NEW_POST = 'SUCCESS_ADD_NEW_POST';
export const FAIL_ADD_NEW_POST = 'FAIL_ADD_NEW_POST';

export const receivePosts = posts => ({
  type: SUCCESS_RECEIVE_POSTS,
  posts,
});

export const errorReceivingPosts = () => ({
  type: FAIL_FETCH_POSTS,
});

export const fetchPosts = () => dispatch =>
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(error => dispatch(errorReceivingPosts(error)));

export const addPostSuccess = post => ({
  type: SUCCESS_ADD_NEW_POST,
  post,
});

export const addPostError = () => ({
  type: FAIL_ADD_NEW_POST,
});

export const addNewPost = payload => dispatch =>
  dispatch(persistPost(payload))
    .then(post => dispatch(addPostSuccess(post)))
    .catch(error => dispatch(addPostError(error)));
