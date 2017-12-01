import { getPosts, persistPost } from '../utils/api';
import { createRandomID } from '../utils/utils';

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

// export const addNewPost = post => dispatch =>
//   persistPost(post)
//     .then(response => dispatch(addPostSuccess(response)));
//     // .catch(error => dispatch(addPostError(error)));

export function addNewPost(posts) {
  return function (dispatch) {
    dispatch(requestAddPost());
    const newPostId = createRandomID();

    return fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        Authorization: 'some-token',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        token: '8b4354ac-d7a3-46cf-2418-c8b91e17cd14',
      },
      body: JSON.stringify({
        [newPostId]: {
          id: newPostId,
          timestamp: posts.timestamp,
          title: posts.title,
          body: posts.body,
          author: posts.author,
          category: posts.category,
        },
      }),
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred', error)
      )
      .then(json => dispatch(addPostSuccess(json)));
  };
}
