import { fetchCommentsForSinglePost } from '../utils/api';

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
