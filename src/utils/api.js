/* global fetch */
import { createRandomID } from '../utils/utils';

const api = 'http://localhost:3001';

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
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data);

export const persistPost = (payload) => {
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
      'content-type': 'application/json',
      'cache-control': 'no-cache',
      token: newToken,
    },
    body: JSON.stringify(updatedPayload),
  })
    .then((data) => {
      console.log('Request success:', data);
    })
    .catch((error) => {
      console.log('Request failure:', error);
    });
};
