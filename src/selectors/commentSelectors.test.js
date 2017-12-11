/* global describe, it, expect */

import selectComments from './commentSelectors';

describe('comment selectors', () => {
  it('should select all child comments for a parent post', () => {
    const initialState = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: 'z60i1tsf',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: 'z60i1tsf',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48xyz': {
        id: '8tu4bsun805n8un48xyz',
        parentId: '23juwodl',
        timestamp: 1569479567199,
        body: 'Comments. Are. Really. Cool.',
        author: 'thingone',
        voteScore: 1,
        deleted: false,
        parentDeleted: false,
      },
      commentStatus: {
        error: false,
        loading: false,
      },
    };
    const postId = 'z60i1tsf';
    const commentsArray = [
      {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: 'z60i1tsf',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
      {
        id: '8tu4bsun805n8un48ve89',
        parentId: 'z60i1tsf',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
    ];
    expect(selectComments(initialState, postId)).toEqual(commentsArray);
  });

  it('should return an empty array when there are no comments', () => {
    const initialState = {
      commentStatus: {
        error: false,
        loading: false,
      },
    };
    const postId = 'z60i1tsf';
    const commentsArray = [];
    expect(selectComments(initialState, postId)).toEqual(commentsArray);
  });

  it('should return empty array when comments are not for the postId', () => {
    const initialState = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: 'z60i1tsf',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: 'z60i1tsf',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48xyz': {
        id: '8tu4bsun805n8un48xyz',
        parentId: '23juwodl',
        timestamp: 1569479567199,
        body: 'Comments. Are. Really. Cool.',
        author: 'thingone',
        voteScore: 1,
        deleted: false,
        parentDeleted: false,
      },
      commentStatus: {
        error: false,
        loading: false,
      },
    };
    const postId = 'doijlk32l';
    const commentsArray = [];
    expect(selectComments(initialState, postId)).toEqual(commentsArray);
  });

  it('should return early an empty array if there is an error', () => {
    const initialState = {
      commentStatus: {
        error: true,
        loading: false,
      },
    };
    const postId = 'z60i1tsf';
    const commentsArray = [];
    expect(selectComments(initialState, postId)).toEqual(commentsArray);
  });

  it('should return early an empty array if loading', () => {
    const initialState = {
      commentStatus: {
        error: false,
        loading: true,
      },
    };
    const postId = 'z60i1tsf';
    const commentsArray = [];
    expect(selectComments(initialState, postId)).toEqual(commentsArray);
  });
});
