import { combineReducers } from 'redux';
import category from './categoryReducer';
import post from './postReducer';
import comments from './commentReducer';

export default combineReducers({
  category,
  comments,
  post,
});
