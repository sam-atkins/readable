/* global describe, it, expect */
import selectItemForDeletion from './selectors';

describe('selectors', () => {
  it('should return true for a matching post to be deleted', () => {
    const deleteBool = true;
    const postId = 'z60i1tsf';
    const postIdForDeletion = 'z60i1tsf';
    expect(selectItemForDeletion(deleteBool, postId, postIdForDeletion)).toBeTruthy();
  });

  it('should return false for a non-matching post to be deleted', () => {
    const deleteBool = true;
    const postId = 'z60i1tsf';
    const postIdForDeletion = '2v3d8ayl';
    expect(selectItemForDeletion(deleteBool, postId, postIdForDeletion)).toBeFalsy();
  });
});
