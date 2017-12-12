/* global afterEach, describe, expect, it */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  fetchComments,
  RECEIVE_COMMENTS_FAIL,
  RECEIVE_COMMENTS_SUCCESS,
} from './commentActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockedAPIReturn = [
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

describe('postActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should fetch comments data', () => {
    fetchMock.getOnce(
      'http://localhost:3001/posts/z60i1tsf/comments',
      mockedAPIReturn
    );

    const expectedActions = [
      {
        type: RECEIVE_COMMENTS_SUCCESS,
        payload: [
          {
            author: 'thingone',
            body: 'Comments. Are. Cool.',
            deleted: false,
            id: '8tu4bsun805n8un48ve89',
            parentDeleted: false,
            parentId: 'z60i1tsf',
            timestamp: 1469479767190,
            voteScore: -5,
          },
        ],
      },
    ];

    const store = mockStore({ mockedAPIReturn });

    return store.dispatch(fetchComments('z60i1tsf')).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it('should catch the fetch error', () => {
    fetchMock.getOnce('http://localhost:3001/posts/z60i1tsf/comments', 304);

    const expectedActions = [
      {
        type: RECEIVE_COMMENTS_FAIL,
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchComments('z60i1tsf')).catch(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

});
