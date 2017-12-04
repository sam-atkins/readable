/* global fetch */
import { getPosts } from '../utils/api';
import { createRandomID } from '../utils/utils';

const api = 'http://localhost:3001';
const headers = {
  Authorization: 'some-token',
  'content-type': 'application/json',
  'cache-control': 'no-cache',
};

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
  const newPostId = createRandomID(8);
  const newPostTimestamp = Date.now();
  const updatedPayload = {
    id: newPostId,
    timestamp: newPostTimestamp,
    title: payload.title,
    body: payload.body,
    author: payload.author,
    category: payload.category,
  };
  const newToken = createRandomID(20);
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      token: newToken,
    },
    body: JSON.stringify(updatedPayload),
  })
    .then((response) => {
      console.log('Request success:', response);
      console.log('====================================');
      console.log('payload sent to api', updatedPayload);
      console.log('====================================');
      return response.json();
    })
    .then((data) => {
      console.log('====================================');
      console.log('data object:', data);
      console.log('====================================');
      return data;
    })
    // .then(response => response.json())
    // .then(data => data)
    .then(posts => dispatch(addPostSuccess(posts)))
    .catch(error => console.log(error))
    .catch(error => dispatch(addPostError(error)));
};
