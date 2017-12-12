/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import comments from './commentReducer';
import {
  RECEIVE_COMMENTS_FAIL,
  RECEIVE_COMMENTS_SUCCESS,
} from '../actions/commentActions';

const initialState = {
  commentStatus: {
    error: false,
    loading: true,
  },
};

describe('comments reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    const expectedState = {
      commentStatus: {
        error: false,
        loading: true,
      },
    };
    deepFreeze(initialState);
    expect(comments(initialState, action)).toEqual(expectedState);
  });

  it('should fail comments fetch gracefully', () => {
    const action = {
      type: RECEIVE_COMMENTS_FAIL,
    };
    const expectedState = {
      commentStatus: {
        error: true,
        loading: false,
      },
    };
    deepFreeze(initialState);
    expect(comments(initialState, action)).toEqual(expectedState);
  });

  it('should add comments to the global store', () => {
    const state = {
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
      commentStatus: {
        error: false,
        loading: false,
      },
    };
    const action = {
      type: RECEIVE_COMMENTS_SUCCESS,
      payload: [
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
      ],
    };
    const expectedState = {
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
      commentStatus: {
        error: false,
        loading: false,
      },
    };
    deepFreeze(state);
    expect(comments(state, action)).toEqual(expectedState);
  });
});
