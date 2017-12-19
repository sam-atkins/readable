import { slugifyPostTitle } from '../utils/utils';

export const getPostLoadingStatus = ({ post }) => post.postStatus.loading;

export const getPostErrorStatus = ({ post }) => post.postStatus.error;

/**
 * Helper method for getPostValues
 * state.post from Redux store, converted to an array of objects
 * @param {object} postObj - state.post from the Redux store
 * @returns {array}
 */
export const convertPostObjToArray = postObj =>
  Object.keys(postObj)
    .filter(key => key !== 'postStatus')
    .map(key => ({
      id: key,
      timestamp: postObj[key].timestamp,
      title: postObj[key].title,
      body: postObj[key].body,
      author: postObj[key].author,
      category: postObj[key].category,
      voteScore: postObj[key].voteScore,
      deleted: postObj[key].deleted,
      commentCount: postObj[key].commentCount,
    }));

/**
 * The selector used in mapStateToProps within components.
 * It converts {state.post} into arrays used for UI. The type arg determines
 * how the arrays are sorted.
 * @param {object} state.post
 * @param {string} type
 * @returns {array} based on the 'sortBy' type arg
 */
export const getPostValues = ({ post }, type) => {
  if (post.postStatus.error === true) {
    return [];
  }

  switch (type) {
    // NOTE example below on how this func will work
    // case SORT_BY_NEW:
    //   return sortPostsByNew(post);
    // case SORT_BY_HIGHEST_VOTE:
    //   return sortPostsByHighestVote(post);
    default:
      return convertPostObjToArray(post);
  }
};

export const filterPostsByParam = (post, urlParam) => {
  const postsArray = getPostValues(post);
  return postsArray.filter(filteredPost =>
    filteredPost.category === urlParam && filteredPost.deleted === false);
};

export const selectPostByPostId = ({ post }, postId) => {
  if (post.postStatus.error === true) {
    return [];
  }

  if (post[postId] !== undefined) {
    return Object.keys(post)
      .filter(key => key === postId)
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
  }
  return [];
};

export const validPostUrl = (
  { post },
  postCategoryUrl,
  postId,
  postTitleSlug
) => {
  if (post[postId] !== undefined) {
    const slugPostTitle = slugifyPostTitle(post[postId].title);
    if (
      slugPostTitle === postTitleSlug &&
      post[postId].category === postCategoryUrl
    ) {
      return true;
    }
  }
  return false;
};
