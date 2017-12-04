import { getPosts, persistPost } from '../utils/api';

export const RECEIVE_POSTS_SUCCESS = 'RECEIVE_POSTS_SUCCESS';
export const receivePosts = posts => ({
  type: RECEIVE_POSTS_SUCCESS,
  posts,
});

export const RECEIVE_POSTS_FAILURE = 'RECEIVE_POSTS_FAILURE';
export const errorReceivingPosts = () => ({
  type: RECEIVE_POSTS_FAILURE,
});

export const fetchPosts = () => dispatch =>
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(error => dispatch(errorReceivingPosts(error)));

export const ADD_NEW_POST_REQUEST = 'ADD_NEW_POST_REQUEST';
export const requestAddPost = () => ({
  type: ADD_NEW_POST_REQUEST,
});

export const ADD_NEW_POST_SUCCESS = 'ADD_NEW_POST_SUCCESS';
export const addPostSuccess = payload => ({
  type: ADD_NEW_POST_SUCCESS,
  payload,
});

export const ADD_NEW_POST_FAILURE = 'ADD_NEW_POST_FAILURE';
export const addPostError = () => ({
  type: ADD_NEW_POST_FAILURE,
});

export const addNewPost = payload => (dispatch) => {
  persistPost(payload)
    .then(data => dispatch(addPostSuccess(data)))
    .catch(error => dispatch(addPostError(error)));
};
