/* global afterEach, describe, expect, it */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  fetchPosts,
  addPostSuccess,
  selectPostToEdit,
  ADD_NEW_POST_SUCCESS,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  SELECT_POST_TO_EDIT,
} from './postActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockedAPIReturn = {
  posts: [
    {
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
    },
  ],
};

describe('postActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should execute fetch data', () => {
    fetchMock.getOnce('http://localhost:3001/posts', mockedAPIReturn);

    const expectedActions = [
      {
        posts: {
          posts: [
            {
              '6ni6ok3ym7mf1p33lnez': {
                author: 'thingone',
                body:
                  'Just kidding. It takes more than 10 minutes to learn technology.',
                category: 'redux',
                commentCount: 0,
                deleted: false,
                id: '6ni6ok3ym7mf1p33lnez',
                timestamp: 1468479767190,
                title: 'Learn Redux in 10 minutes!',
                voteScore: -5,
              },
              '8xf0y6ziyjabvozdd253nd': {
                author: 'thingtwo',
                body: 'Everyone says so after all.',
                category: 'react',
                commentCount: 2,
                deleted: false,
                id: '8xf0y6ziyjabvozdd253nd',
                timestamp: 1467166872634,
                title: 'Udacity is the best place to learn React',
                voteScore: 6,
              },
            },
          ],
        },
        type: RECEIVE_POSTS_SUCCESS,
      },
    ];

    const store = mockStore({ mockedAPIReturn });

    return store.dispatch(fetchPosts()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it('should catch the fetch error', () => {
    fetchMock.getOnce('http://localhost:3001/posts', 304);

    const expectedActions = [
      {
        type: RECEIVE_POSTS_FAILURE,
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchPosts()).catch(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it('should send the add post action', () => {
    const payload = {
      title: 'test title',
      author: 'test author',
      body: 'this is a test body',
      timestamp: 1511962218825,
      category: 'react',
    };
    const expectedAction = {
      type: ADD_NEW_POST_SUCCESS,
      payload,
    };
    expect(addPostSuccess(payload)).toEqual(expectedAction);
  });

  it('should provide a payload for the post to be edited', () => {
    const payload = {
      id: '6ni6ok3ym7mf1p33lnez',
    };
    const expectedAction = {
      type: SELECT_POST_TO_EDIT,
      payload,
    };
    expect(selectPostToEdit(payload)).toEqual(expectedAction);
  });
});
