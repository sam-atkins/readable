import { combineReducers } from 'redux';
import {
  FAIL_FETCH_CATEGORIES,
  SUCCESS_RECEIVE_CATEGORIES,
} from '../actions/categoryActions';
// import {
//   FAIL_FETCH_POSTS,
//   SUCCESS_RECEIVE_POSTS,
// } from '../actions/postActions';

// const initialState = {
//   category: { error: true, loading: false },
//   post: { error: false, loading: true },
// };

// const initialCategoryState = { loading: true, error: false };

const category = (state = {}, action) => {
  const { categories } = action;

  switch (action.type) {
    case SUCCESS_RECEIVE_CATEGORIES:
      return {
        ...categories,
        categoryStatus: {
          error: false,
          loading: false,
        },
      };
    case FAIL_FETCH_CATEGORIES:
      return {
        ...state.category,
        // ...state,
        categoryStatus: {
          error: false,
          loading: false,
        },
      };
    default:
      return state;
  }
};

// const initialPostState = { loading: true, error: false };

// const post = (state = initialState, action) => {
//   // const { posts } = action;

//   switch (action.type) {
//     // case SUCCESS_RECEIVE_POSTS:
//     default:
//       return state;
//   }
// };

export default combineReducers({
  category,
  // post,
});
