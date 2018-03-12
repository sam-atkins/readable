/* global fetch */
import { createRandomID } from '../utils/utils';
import { apiDev, prodApi } from './config';

let api = '';

if (process.env.NODE_ENV === 'production') {
  api = prodApi;
} else {
  api = apiDev;
}

// Generates a unique token; removed because in order to test components using
// localStorage need to eject from `create-react-app`
// let { token } = localStorage;
// if (!token) {
//   token = localStorage.token = Math.random()
//     .toString(36)
//     .substr(-8);
// }

const headers = {
  Authorization: 'some-token',
  'content-type': 'application/json',
  'cache-control': 'no-cache',
};

export const getCategories = () =>
  fetch(`${api}/categories`, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data.categories);

export const getPosts = () =>
  fetch(`${api}/posts`, {
    method: 'GET',
    headers: {
      ...headers,
    },
  })
    .then(res => res.json())
    .then(data => data);

export const persistPost = (payload) => {
  // creating UUID and timestamps is for the purposes and scope of the project
  // but creating an ID and timestamp should be done server side,
  // not on the client.
  const newPostId = createRandomID(8);
  const newPostTimestamp = Date.now();
  const updatedPayload = {
    ...payload,
    id: newPostId,
    timestamp: newPostTimestamp,
  };
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(updatedPayload),
  })
    .then(response => response.json())
    .then(data => data);
};

export const editAndPersistPost = (payload) => {
  const updatedPayload = {
    title: payload.title,
    body: payload.body,
  };
  return fetch(`${api}/posts/${payload.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
    },
    body: JSON.stringify(updatedPayload),
  })
    .then(response => response.json())
    .then(data => data);
};

export const deletePost = payload =>
  fetch(`${api}/posts/${payload}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  })
    .then(response => response.json())
    .then(data => data);

/**
 *
 * @param {number} payload comment.parentId i.e. post.id
 */
export const fetchCommentsForSinglePost = payload =>
  fetch(`${api}/posts/${payload}/comments`, {
    method: 'GET',
    headers: {
      ...headers,
    },
  })
    .then(response => response.json())
    .then(data => data);

export const persistComment = (payload) => {
  // creating UUID and timestamps is for the purposes and scope of the project
  // but creating an ID and timestamp should be done server side,
  // not on the client.
  const newCommentId = createRandomID(24);
  const newCommentTimestamp = Date.now();
  const updatedPayload = {
    ...payload,
    id: newCommentId,
    timestamp: newCommentTimestamp,
  };
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(updatedPayload),
  })
    .then(response => response.json())
    .then(data => data);
};

export const editAndPersistComment = (payload) => {
  const editCommentTimestamp = Date.now();
  const updatedPayload = {
    ...payload,
    timestamp: editCommentTimestamp,
  };
  return fetch(`${api}/comments/${payload.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
    },
    body: JSON.stringify(updatedPayload),
  })
    .then(response => response.json())
    .then(data => data);
};

export const deleteComment = payload =>
  fetch(`${api}/comments/${payload}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  })
    .then(response => response.json())
    .then(data => data);

/**
 * persistVote used for up/down voting posts and comments
 * @param {string} id of the post or comment
 * @param {string} voteType 'posts' or 'comments'
 * @param {string} voteDirection either "upVote" or "downVote"
 */
export const persistVote = (id, voteDirection, voteType) => {
  const updatedPayload = {
    option: voteDirection,
  };
  return fetch(`${api}/${voteType}/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(updatedPayload),
  })
    .then(response => response.json())
    .then(data => data);
};
