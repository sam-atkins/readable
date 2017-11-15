/* global describe, it, expect */

// import deepFreeze from 'deep-freeze';
import category from './rootReducer';
import { RECEIVE_CATEGORIES } from '../actions/categoryActions';

describe('category reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      category: {},
    };
    const action = {};
    const expectedState = {
      category: {},
    };
    expect(category(initialState, action)).toEqual(expectedState);
  });

  // it('should add categories to the global store', () => {
  //   const initialState = {
  //     category: {},
  //   };
  //   const action = {
  //     type: RECEIVE_CATEGORIES,
  //     categories: [
  //       {
  //         name: 'react',
  //         path: 'react',
  //       },
  //       {
  //         name: 'redux',
  //         path: 'redux',
  //       },
  //       {
  //         name: 'udacity',
  //         path: 'udacity',
  //       },
  //     ],
  //   };
  //   const expectedState = {
  //     category: {},
  //   };
  //   expect(category(initialState, action)).toEqual(expectedState);
  // });
});
