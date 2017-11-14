import getCategories from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch =>
  getCategories().then(categories => dispatch(receiveCategories(categories)));
