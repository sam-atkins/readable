/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import comments from './commentReducer';
import {
  ADD_NEW_COMMENT_FAILURE,
  ADD_NEW_COMMENT_SUCCESS,
  CANCEL_REQUEST_DELETE_COMMENT,
  CONFIRM_DELETE_COMMENT,
  FAILED_DELETE_COMMENT,
  RECEIVE_COMMENTS_FAIL,
  RECEIVE_COMMENTS_SUCCESS,
  REQUEST_DELETE_COMMENT,
  TOGGLE_COMMENT_EDIT_TO_VIEW,
  TOGGLE_COMMENT_VIEW_TO_EDIT,
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

  it('should add a new comment to the global store', () => {
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
        loading: true,
      },
    };
    const action = {
      type: ADD_NEW_COMMENT_SUCCESS,
      payload: {
        id: '8tu4bsun805n8un48ve89',
        parentId: 'z60i1tsf',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
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

  it('should fail gracefully if a comment cannot be added', () => {
    const state = {
      commentStatus: {
        error: false,
        loading: true,
      },
    };
    const action = {
      type: ADD_NEW_COMMENT_FAILURE,
    };
    const expectedState = {
      commentStatus: {
        error: false,
        loading: false,
        errorAddComment: true,
      },
    };
    deepFreeze(state);
    expect(comments(state, action)).toEqual(expectedState);
  });

  it('should toggle commentEditViewToggle to true', () => {
    const state = {
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
        commentEditViewToggle: false,
      },
    };
    const action = {
      type: TOGGLE_COMMENT_VIEW_TO_EDIT,
      payload: '8tu4bsun805n8un48ve89',
    };
    const expectedState = {
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
        commentEditViewToggle: true,
        commentIdForEditing: '8tu4bsun805n8un48ve89',
      },
    };
    deepFreeze(state);
    expect(comments(state, action)).toEqual(expectedState);
  });

  it('should toggle commentEditViewToggle to false', () => {
    const state = {
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
        commentEditViewToggle: true,
      },
    };
    const action = {
      type: TOGGLE_COMMENT_EDIT_TO_VIEW,
      payload: '8tu4bsun805n8un48ve89',
    };
    const expectedState = {
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
        commentEditViewToggle: false,
        commentIdForEditing: '8tu4bsun805n8un48ve89',
      },
    };
    deepFreeze(state);
    expect(comments(state, action)).toEqual(expectedState);
  });

  it('should setup comment delete request', () => {
    const state = {
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
    const action = {
      type: REQUEST_DELETE_COMMENT,
      payload: '8tu4bsun805n8un48ve89',
    };
    const expectedState = {
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
        requestDelete: true,
        commentIdForDeletion: '8tu4bsun805n8un48ve89',
      },
    };
    deepFreeze(state);
    expect(comments(state, action)).toEqual(expectedState);
  });

  it('should cancel the request to cancel a comment', () => {
    const state = {
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
    const action = {
      type: CANCEL_REQUEST_DELETE_COMMENT,
    };
    const expectedState = {
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
        requestDelete: false,
      },
    };
    deepFreeze(state);
    expect(comments(state, action)).toEqual(expectedState);
  });

  it('should set delete comment flag to true', () => {
    const state = {
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
    };
    const action = {
      type: CONFIRM_DELETE_COMMENT,
      payload: {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: 'z60i1tsf',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: true,
        parentDeleted: false,
      },
    };
    const expectedState = {
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
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: 'z60i1tsf',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: true,
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

  it('should fail gracefully if delete comment errors', () => {
    const state = {
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
    const action = {
      type: FAILED_DELETE_COMMENT,
    };
    const expectedState = {
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
        requestDeleteError: true,
      },
    };
    deepFreeze(state);
    expect(comments(state, action)).toEqual(expectedState);
  });
});
