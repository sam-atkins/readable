const selectItemForDeletion = (
  deleteBool,
  postId,
  postIdForDeletion
) => {
  if (deleteBool && postId === postIdForDeletion) {
    return true;
  }
  return false;
};

export default selectItemForDeletion;
