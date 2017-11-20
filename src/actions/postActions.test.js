/* global afterEach, describe, expect, it */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  fetchPosts,
  FAIL_FETCH_POSTS,
  SUCCESS_RECEIVE_POSTS,
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
        payload: [
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
        type: SUCCESS_RECEIVE_POSTS,
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
        type: FAIL_FETCH_POSTS,
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchPosts()).catch(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
