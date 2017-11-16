/* global afterEach, describe, expect, it */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  fetchCategories,
  FAIL_FETCH_CATEGORIES,
  RECEIVE_CATEGORIES,
} from './categoryActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockedAPIReturn = {
  categories: [
    {
      name: 'react',
      path: 'react',
    },
    {
      name: 'redux',
      path: 'redux',
    },
    {
      name: 'udacity',
      path: 'udacity',
    },
  ],
};

describe('categoryActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should execute fetch data', () => {
    fetchMock.getOnce('http://localhost:3001/categories', mockedAPIReturn);

    const expectedActions = [
      {
        categories: [
          {
            name: 'react',
            path: 'react',
          },
          {
            name: 'redux',
            path: 'redux',
          },
          {
            name: 'udacity',
            path: 'udacity',
          },
        ],
        type: RECEIVE_CATEGORIES,
      },
    ];

    const store = mockStore({ mockedAPIReturn });

    return store.dispatch(fetchCategories()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it('should catch the fetch error', () => {
    fetchMock.getOnce('http://localhost:3001/categories', 304);

    const expectedActions = [
      {
        type: FAIL_FETCH_CATEGORIES,
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchCategories()).catch(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
