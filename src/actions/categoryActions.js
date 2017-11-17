import { getCategories } from '../utils/api';

export const SUCCESS_RECEIVE_CATEGORIES = 'SUCCESS_RECEIVE_CATEGORIES';
export const FAIL_FETCH_CATEGORIES = 'FAIL_FETCH_CATEGORIES';

export const receiveCategories = categories => ({
  type: SUCCESS_RECEIVE_CATEGORIES,
  categories,
});

export const errorReceivingCategories = () => ({
  type: FAIL_FETCH_CATEGORIES,
});

export const fetchCategories = () => dispatch =>
  getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
    .catch(error => dispatch(errorReceivingCategories(error)));
