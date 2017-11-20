import { combineReducers } from 'redux';
import category from './categoryReducer';
import post from './postReducer';

export default combineReducers({
  category,
  post,
});
