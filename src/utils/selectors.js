export const getCategoryLoadingStatus = obj => ({
  loading: obj.category.loading,
});

export const getCategoryErrorStatus = obj => ({
  error: obj.category.error,
});

export const getCategoryValues = ({ category }) => category.categories;
