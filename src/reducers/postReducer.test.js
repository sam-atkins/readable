/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import post from './postReducer';
import {
  ADD_NEW_POST_FAILURE,
  ADD_NEW_POST_SUCCESS,
  CANCEL_REQUEST_DELETE_POST,
  CONFIRM_DELETE_POST,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  REQUEST_DELETE_POST,
  SELECT_POST_TO_EDIT,
  SORT_BY_HIGHEST_VOTE,
  SORT_BY_NEW,
  TOGGLE_FORM_REDIRECT,
  VOTE_POST_FAILED,
  VOTE_POST_SUCCESS,
  SORT_BY_OLD,
  SORT_BY_LOWEST_VOTE,
} from '../actions/postActions';
import {
  DECREMENT_COMMENT_COUNT,
  INCREMENT_COMMENT_COUNT,
} from '../actions/commentActions';

describe('post reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    const action = {};
    const expectedState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should add posts to the global store', () => {
    const initialState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
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
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should fail to fetch posts gracefully', () => {
    const initialState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    const action = {
      type: RECEIVE_POSTS_FAILURE,
    };
    const expectedState = {
      postStatus: {
        edit: false,
        addNewPostError: true,
        loading: false,
        redirect: false,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should add a new post to the global store', () => {
    const initialState = {
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
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
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
        addNewPostError: false,
        loading: false,
        redirect: true,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should fail gracefully if add new post errors', () => {
    const initialState = {
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
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    const action = {
      type: ADD_NEW_POST_FAILURE,
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
      postStatus: {
        edit: false,
        addNewPostError: true,
        loading: false,
        redirect: false,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should toggle redirect to false', () => {
    const initialState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    const action = {
      type: TOGGLE_FORM_REDIRECT,
    };
    const expectedState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should add the postId for the post selected for editing', () => {
    const initialState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
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
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: false,
        postIdForEditing: '6ni6ok3ym7mf1p33lnez',
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should set a deleted post bool to true', () => {
    const initialState = {
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
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    const action = {
      type: CONFIRM_DELETE_POST,
      payload: {
        id: 'Qzh7pWU9',
        timestamp: 1512330673632,
        title: 'hi',
        body: 'test message',
        author: 'sam',
        category: 'udacity',
        voteScore: 1,
        deleted: true,
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
        deleted: true,
        commentCount: 0,
      },
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should set requestDelete bool to true and provide postId', () => {
    const initialState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    const payload = '6ni6ok3ym7mf1p33lnez';
    const action = {
      type: REQUEST_DELETE_POST,
      payload,
    };
    const expectedState = {
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: true,
        postIdForDeletion: '6ni6ok3ym7mf1p33lnez',
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should cancel delete request i.e. set requestDelete to false', () => {
    const initialState = {
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
        addNewPostError: false,
        loading: true,
        redirect: false,
        requestDelete: false,
      },
    };
    const action = {
      type: CANCEL_REQUEST_DELETE_POST,
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
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should increment comment count', () => {
    const initialState = {
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
        commentCount: 1,
      },
    };
    const action = {
      type: INCREMENT_COMMENT_COUNT,
      payload: {
        payload: {
          id: '8tu4bsun805n8un48ve89',
          parentId: 'ni6ok3ym',
          timestamp: 1469479767190,
          body: 'Comments. Are. Cool.',
          author: 'thingone',
          voteScore: -5,
          deleted: false,
          parentDeleted: false,
        },
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
        commentCount: 2,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should decrement comment count', () => {
    const initialState = {
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
        commentCount: 3,
      },
    };
    const action = {
      type: DECREMENT_COMMENT_COUNT,
      payload: {
        payload: {
          id: '8tu4bsun805n8un48ve89',
          parentId: 'ni6ok3ym',
          timestamp: 1469479767190,
          body: 'Comments. Are. Cool.',
          author: 'thingone',
          voteScore: -5,
          deleted: false,
          parentDeleted: false,
        },
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
        commentCount: 2,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should up vote a post', () => {
    const initialState = {
      ni6ok3ym: {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: 5,
        deleted: false,
        commentCount: 0,
      },
    };
    const action = {
      type: VOTE_POST_SUCCESS,
      payload: {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: 6,
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
        voteScore: 6,
        deleted: false,
        commentCount: 0,
      },
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: false,
        voteError: false,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should fail gracefully when a vote errors', () => {
    const initialState = {
      ni6ok3ym: {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: 5,
        deleted: false,
        commentCount: 0,
      },
    };
    const action = {
      type: VOTE_POST_FAILED,
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
        voteScore: 5,
        deleted: false,
        commentCount: 0,
      },
      postStatus: {
        edit: false,
        addNewPostError: false,
        loading: false,
        redirect: false,
        requestDelete: false,
        voteError: true,
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should set status to sort by highest vote', () => {
    const initialState = {
      sortPosts: {
        sortBy: '',
      },
    };
    const action = {
      type: SORT_BY_HIGHEST_VOTE,
    };
    const expectedState = {
      sortPosts: {
        sortBy: 'HIGHEST_VOTE',
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should set status to sort by lowest vote', () => {
    const initialState = {
      sortPosts: {
        sortBy: '',
      },
    };
    const action = {
      type: SORT_BY_LOWEST_VOTE,
    };
    const expectedState = {
      sortPosts: {
        sortBy: 'LOWEST_VOTE',
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should set status to sort by newest post', () => {
    const initialState = {
      sortPosts: {
        sortBy: '',
      },
    };
    const action = {
      type: SORT_BY_NEW,
    };
    const expectedState = {
      sortPosts: {
        sortBy: 'NEW',
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });

  it('should set status to sort by oldest vote', () => {
    const initialState = {
      sortPosts: {
        sortBy: '',
      },
    };
    const action = {
      type: SORT_BY_OLD,
    };
    const expectedState = {
      sortPosts: {
        sortBy: 'OLD',
      },
    };
    deepFreeze(initialState);
    expect(post(initialState, action)).toEqual(expectedState);
  });
});
