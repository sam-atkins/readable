const selectComments = (comments, postId) => {
  if (
    comments.commentStatus.error === true ||
    comments.commentStatus.loading === true
  ) {
    return [];
  }

  return Object.keys(comments)
    .filter(key =>
      comments[key].parentId === postId && comments[key].deleted === false)
    .map(key => ({
      id: key,
      parentId: comments[key].parentId,
      timestamp: comments[key].timestamp,
      body: comments[key].body,
      author: comments[key].author,
      voteScore: comments[key].voteScore,
      deleted: comments[key].deleted,
      parentDeleted: comments[key].parentDeleted,
    }));
};

export default selectComments;
