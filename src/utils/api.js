/* global fetch */

const api = 'http://localhost:3001';

// Generates a unique token; removed as in order to test components using
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

const getCategories = () =>
  fetch(`${api}/categories`, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data.categories);

export default getCategories;
