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

export const getPostLoadingStatus = ({ post }) =>
  post.postStatus.loading;

export const getPostErrorStatus = ({ post }) =>
  post.postStatus.error;


export const getPostValues = ({ post }) => {
  if (post.postStatus.error === true) {
    return [];
  }

  return Object.keys(post)
    .filter(key => key !== 'postStatus')
    .map(key => ({
      id: key,
      timestamp: post[key].timestamp,
      title: post[key].title,
      body: post[key].body,
      author: post[key].author,
      category: post[key].category,
      voteScore: post[key].voteScore,
      deleted: post[key].deleted,
      commentCount: post[key].commentCount,
    }));
};
