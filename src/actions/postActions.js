import {
  editAndPersistPost,
  deletePost,
  getPosts,
  persistPost,
} from '../utils/api';

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

export const TOGGLE_FORM_REDIRECT = 'TOGGLE_FORM_REDIRECT';
export const toggleRedirect = () => ({
  type: TOGGLE_FORM_REDIRECT,
});

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

export const SELECT_POST_TO_EDIT = 'SELECT_POST_TO_EDIT';
export const selectPostToEdit = payload => ({
  type: SELECT_POST_TO_EDIT,
  payload,
});

export const editExistingPost = payload => (dispatch) => {
  editAndPersistPost(payload)
    .then(data => dispatch(addPostSuccess(data)))
    .catch(error => dispatch(addPostError(error)));
};

export const CANCEL_REQUEST_DELETE_POST = 'CANCEL_REQUEST_DELETE_POST';
export const cancelRequestDeletePost = () => ({
  type: CANCEL_REQUEST_DELETE_POST,
});

export const REQUEST_DELETE_POST = 'REQUEST_DELETE_POST';
export const requestDeletePost = () => ({
  type: REQUEST_DELETE_POST,
});

export const CONFIRM_DELETE_POST = 'CONFIRM_DELETE_POST';
export const confirmDeletePost = payload => ({
  type: CONFIRM_DELETE_POST,
  payload,
});

export const FAILED_DELETE_POST = 'FAILED_DELETE_POST';
export const failedDeletePost = () => ({
  type: FAILED_DELETE_POST,
});

export const processPostDeletion = payload => (dispatch) => {
  deletePost(payload)
    .then(data => dispatch(confirmDeletePost(data)))
    .catch(error => dispatch(failedDeletePost(error)));
};
