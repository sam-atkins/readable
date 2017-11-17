import { getPosts } from '../utils/api';

export const SUCCESS_RECEIVE_POSTS = 'SUCCESS_RECEIVE_POSTS';
export const FAIL_FETCH_POSTS = 'FAIL_FETCH_POSTS';

export const receivePosts = posts => ({
  type: SUCCESS_RECEIVE_POSTS,
  payload: posts,
});

export const errorReceivingPosts = () => ({
  type: FAIL_FETCH_POSTS,
});

export const fetchPosts = () => dispatch =>
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(error => dispatch(errorReceivingPosts(error)));
