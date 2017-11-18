import {
  FAIL_FETCH_CATEGORIES,
  SUCCESS_RECEIVE_CATEGORIES,
} from '../actions/categoryActions';

const category = (state = {}, action) => {
  const { categories } = action;

  switch (action.type) {
    case SUCCESS_RECEIVE_CATEGORIES:
      const newCats = categories.reduce(
        (newObj, cat) => ({ ...newObj, [cat.name]: cat }),
        {}
      );
      return {
        ...newCats,
        categoryStatus: {
          error: false,
          loading: false,
        },
      };
    case FAIL_FETCH_CATEGORIES:
      return {
        ...state.category,
        categoryStatus: {
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default category;
