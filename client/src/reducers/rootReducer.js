import { combineReducers } from 'redux';
import { RECEIVE_CATEGORIES } from '../actions/categoryActions';

const category = (state = {}, action) => {
  const { categories } = action;

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return categories;
    default:
      return state;
  }
};

export default combineReducers({
  category,
});
