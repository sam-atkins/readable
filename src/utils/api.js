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
  const newPostId = createRandomID();

  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      token: '8b4354ac-d7a3-46cf-2418-c8b91e17cd14',
    },
    // body: payload,
    // body: JSON.stringify(payload),
    // body: JSON.stringify({
    //   [newPostId]: {
    //     id: newPostId,
    //     category: 'udacity',
    //     title: 'hello world',
    //     body: 'this is a thought',
    //     author: 'mary',
    //     timestamp: 1467166872634,
    //   },
    body: JSON.stringify({
      [newPostId]: {
        id: newPostId,
        timestamp: payload.timestamp,
        title: payload.title,
        body: payload.body,
        author: payload.author,
        category: payload.category,
      },
    }),
  })
    .then(res => res.json())
    .then(res => console.log(res));
};
