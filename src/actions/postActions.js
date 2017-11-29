import { getPosts, persistPost } from '../utils/api';

export const SUCCESS_RECEIVE_POSTS = 'SUCCESS_RECEIVE_POSTS';
export const FAIL_FETCH_POSTS = 'FAIL_FETCH_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';

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

export const addPost = payload => ({
  type: ADD_NEW_POST,
  payload,
});
