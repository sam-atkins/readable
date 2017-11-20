export const getCategoryLoadingStatus = ({ category }) =>
  category.categoryStatus.loading;

export const getCategoryErrorStatus = ({ category }) =>
  category.categoryStatus.error;

export const getCategoryValues = ({ category }) => {
  if (category.error === true) {
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
