import { combineReducers } from 'redux';
import { RECEIVE_CATEGORIES } from '../actions/categoryActions';

const categoryReducer = (state = {}, action) => {
  const { categories } = action;

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories,
      };
    default:
      return state;
  }
};

export default combineReducers({
  categoryReducer,
});
