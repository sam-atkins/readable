import { combineReducers } from 'redux';
import {
  FAIL_FETCH_CATEGORIES,
  SUCCESS_RECEIVE_CATEGORIES,
} from '../actions/categoryActions';

const initialState = { loading: true, error: false };

const category = (state = initialState, action) => {
  const { categories } = action;

  switch (action.type) {
    case SUCCESS_RECEIVE_CATEGORIES:
      return {
        ...state,
        categories,
        loading: false,
      };
    case FAIL_FETCH_CATEGORIES:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default combineReducers({
  category,
});
