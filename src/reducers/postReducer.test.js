/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import post from './postReducer';
import {
  ADD_NEW_POST_SUCCESS,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  SELECT_POST_TO_EDIT,
  TOGGLE_FORM_REDIRECT,
} from '../actions/postActions';

describe('post reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      postStatus: {
        error: false,
        loading: true,
      },
    };
    const action = {};
    const expectedState = {
      postStatus: {
        error: false,
        loading: true,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should add posts to the global store', () => {
    const initialState = {
      postStatus: {
        edit: false,
        error: false,
        loading: true,
        redirect: false,
      },
    };
    const action = {
      type: RECEIVE_POSTS_SUCCESS,
      posts: [
        {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2,
        },
        {
          id: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body:
            'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: -5,
          deleted: false,
          commentCount: 0,
        },
      ],
    };
    const expectedState = {
      '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
      },
      '6ni6ok3ym7mf1p33lnez': {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
      },
      postStatus: {
        edit: false,
        error: false,
        loading: false,
        redirect: false,
      },
    };
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should fail to fetch posts gracefully', () => {
    const initialState = {
      postStatus: {
        edit: false,
        error: false,
        loading: true,
        redirect: false,
      },
    };
    const action = {
      type: RECEIVE_POSTS_FAILURE,
    };
    const expectedState = {
      postStatus: {
        edit: false,
        error: true,
        loading: false,
        redirect: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should add a new post to the global store', () => {
    const state = {
      ni6ok3ym: {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
      },
      postStatus: {
        edit: false,
        error: false,
        loading: false,
      },
    };
    const action = {
      type: ADD_NEW_POST_SUCCESS,
      payload: {
        id: 'Qzh7pWU9',
        timestamp: 1512330673632,
        title: 'hi',
        body: 'test message',
        author: 'sam',
        category: 'udacity',
        voteScore: 1,
        deleted: false,
        commentCount: 0,
      },
    };
    const expectedState = {
      ni6ok3ym: {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
      },
      Qzh7pWU9: {
        id: 'Qzh7pWU9',
        timestamp: 1512330673632,
        title: 'hi',
        body: 'test message',
        author: 'sam',
        category: 'udacity',
        voteScore: 1,
        deleted: false,
        commentCount: 0,
      },
      postStatus: {
        edit: false,
        error: false,
        loading: false,
        redirect: true,
      },
    };
    expect(post(state, action)).toEqual(expectedState);
  });

  it('should toggle redirect to false', () => {
    const initialState = {
      postStatus: {
        error: false,
        loading: false,
        redirect: true,
      },
    };
    const action = {
      type: TOGGLE_FORM_REDIRECT,
    };
    const expectedState = {
      postStatus: {
        edit: false,
        error: false,
        loading: false,
        redirect: false,
      },
    };
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should add the postId for the post selected for editing', () => {
    const initialState = {
      postStatus: {
        error: false,
        loading: false,
        redirect: true,
      },
    };
    const payload = '6ni6ok3ym7mf1p33lnez';
    const action = {
      type: SELECT_POST_TO_EDIT,
      payload,
    };
    const expectedState = {
      postStatus: {
        edit: true,
        error: false,
        loading: false,
        redirect: false,
        postIdForEditing: '6ni6ok3ym7mf1p33lnez',
      },
    };
    expect(post(initialState, action)).toEqual(expectedState);
  });
});
