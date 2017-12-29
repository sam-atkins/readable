import { slugifyPostTitle } from '../utils/utils';

export const getPostLoadingStatus = ({ post }) => post.postStatus.loading;

export const getPostErrorStatus = ({ post }) => post.postStatus.addNewPostError;

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

export const sortPostsByHighestVote = postsArray =>
  postsArray.sort((prev, next) => {
    if (prev.voteScore > next.voteScore) {
      return -1;
    }
    return 1;
  });

export const sortPostsByLowestVote = postsArray =>
  postsArray.sort((prev, next) => {
    if (prev.voteScore > next.voteScore) {
      return 1;
    }
    return -1;
  });

export const sortPostsByNewestDate = postsArray =>
  postsArray.sort((prev, next) => {
    if (prev.timestamp > next.timestamp) {
      return -1;
    }
    return 1;
  });

export const sortPostsByOldestDate = postsArray =>
  postsArray.sort((prev, next) => {
    if (prev.timestamp > next.timestamp) {
      return 1;
    }
    return -1;
  });

/**
 * The selector used in mapStateToProps within components.
 * It converts {state.post} into arrays used for UI. The sortType arg determines
 * how the arrays are sorted, based on {post.sortPosts.sortBy} in Redux store.
 * @param {object} state.post
 * @param {string} sortType
 * @returns {array} based on the 'sortBy' sortType arg
 */
export const getPostValues = ({ post }, sortType, urlParam = '') => {
  if (post.postStatus.error === true) {
    return [];
  }

  let postValues = [];
  if (urlParam === '') {
    postValues = convertPostObjToArray(post);
  } else {
    const postArray = convertPostObjToArray(post);
    postValues = postArray.filter(filteredPost =>
      filteredPost.category === urlParam && filteredPost.deleted === false);
  }

  switch (sortType) {
    case 'HIGHEST_VOTE':
      return sortPostsByHighestVote(postValues);
    case 'LOWEST_VOTE':
      return sortPostsByLowestVote(postValues);
    case 'NEW':
      return sortPostsByNewestDate(postValues);
    case 'OLD':
      return sortPostsByOldestDate(postValues);
    default:
      return postValues;
  }
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
