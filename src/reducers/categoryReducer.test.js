/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import category from './categoryReducer';
import {
  FAIL_FETCH_CATEGORIES,
  SUCCESS_RECEIVE_CATEGORIES,
} from '../actions/categoryActions';

describe('category reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      category: { category: { error: false, loading: true } },
    };
    const action = {};
    const expectedState = {
      category: { category: { error: false, loading: true } },
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
      react: { name: 'react', path: 'react' },
      redux: { name: 'redux', path: 'redux' },
      udacity: { name: 'udacity', path: 'udacity' },
      categoryStatus: { error: false, loading: false },
    };
    deepFreeze(initialState);
    expect(category(initialState, action)).toEqual(expectedState);
  });

  it('should fail the fetch gracefully', () => {
    const initialState = {
      category: { categoryStatus: { error: false, loading: true } },
    };
    const action = {
      type: FAIL_FETCH_CATEGORIES,
    };
    const expectedState = {
      categoryStatus: { error: true, loading: false },
    };
    deepFreeze(initialState);
    expect(category(initialState, action)).toEqual(expectedState);
  });
});
