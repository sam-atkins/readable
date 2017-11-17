/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import category from './rootReducer';
import {
  FAIL_FETCH_CATEGORIES,
  SUCCESS_RECEIVE_CATEGORIES,
} from '../actions/categoryActions';

describe('category reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      category: {},
    };
    const action = {};
    const expectedState = {
      category: {},
    };
    deepFreeze(initialState);
    expect(category(initialState, action)).toEqual(expectedState);
  });

  it('should add categories to the global store', () => {
    const initialState = {
      category: { loading: true, error: false },
    };
    const action = {
      type: SUCCESS_RECEIVE_CATEGORIES,
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
    const expectedState = {
      category: {
        loading: false,
        error: false,
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
      },
    };
    deepFreeze(initialState);
    expect(category(initialState, action)).toEqual(expectedState);
  });

  it('should fail the fetch gracefully', () => {
    const initialState = {
      category: { loading: true, error: false },
    };
    const action = {
      type: FAIL_FETCH_CATEGORIES,
    };
    const expectedState = {
      category: { loading: false, error: true },
    };
    deepFreeze(initialState);
    expect(category(initialState, action)).toEqual(expectedState);
  });
});
