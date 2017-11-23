export const getCategoryLoadingStatus = ({ category }) =>
  category.categoryStatus.loading;

export const getCategoryErrorStatus = ({ category }) =>
  category.categoryStatus.error;

export const getCategoryValues = ({ category }) => {
  if (category.categoryStatus.error === true) {
    return [];
  }

  return Object.keys(category)
    .filter(key => key !== 'categoryStatus')
    .map(key => ({
      id: key,
      name: category[key].name,
      path: category[key].path,
    }));
};

export const validCategoryUrl = ({ category }, urlParam) => {
  if (category[urlParam] !== undefined) return true;
  return false;
};
