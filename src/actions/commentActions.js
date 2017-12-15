import {
  editAndPersistComment,
  fetchCommentsForSinglePost,
  persistComment,
} from '../utils/api';

export const RECEIVE_COMMENTS_SUCCESS = 'RECEIVE_COMMENTS_SUCCESS';
export const receiveCommentsSuccess = payload => ({
  type: RECEIVE_COMMENTS_SUCCESS,
  payload,
});

export const RECEIVE_COMMENTS_FAIL = 'RECEIVE_COMMENTS_FAIL';
export const receiveCommentsFail = () => ({
  type: RECEIVE_COMMENTS_FAIL,
});

export const fetchComments = payload => dispatch =>
  fetchCommentsForSinglePost(payload)
    .then(comments => dispatch(receiveCommentsSuccess(comments)))
    .catch(error => dispatch(receiveCommentsFail(error)));

export const ADD_NEW_COMMENT_SUCCESS = 'ADD_NEW_COMMENT_SUCCESS';
export const addCommentSuccess = payload => ({
  type: ADD_NEW_COMMENT_SUCCESS,
  payload,
});

export const ADD_NEW_COMMENT_FAILURE = 'ADD_NEW_COMMENT_FAILURE';
export const addCommentError = () => ({
  type: ADD_NEW_COMMENT_FAILURE,
});

export const addCommentPost = payload => (dispatch) => {
  persistComment(payload)
    .then(data => dispatch(addCommentSuccess(data)))
    .catch(error => dispatch(addCommentError(error)));
};

export const TOGGLE_COMMENT_VIEW_TO_EDIT = 'TOGGLE_COMMENT_VIEW_TO_EDIT';
export const toggleCommentViewToEdit = payload => ({
  type: TOGGLE_COMMENT_VIEW_TO_EDIT,
  payload,
});

export const TOGGLE_COMMENT_EDIT_TO_VIEW =
  'TOGGLE_COMMENT_EDIT_TO_VIEW';
export const toggleCommentFromEditToView = payload => ({
  type: TOGGLE_COMMENT_EDIT_TO_VIEW,
  payload,
});

export const editExistingComment = payload => (dispatch) => {
  editAndPersistComment(payload)
    .then(data => dispatch(addCommentSuccess(data)))
    .catch(error => dispatch(addCommentError(error)));
};
