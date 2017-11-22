export const getPostLoadingStatus = ({ post }) => post.postStatus.loading;

export const getPostErrorStatus = ({ post }) => post.postStatus.error;

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

export const filterPostsByParam = (post, urlParam) => {
  const postsArray = getPostValues(post);
  return postsArray.filter(filteredPost => filteredPost.category === urlParam);
};
