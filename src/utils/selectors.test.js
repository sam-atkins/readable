import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
} from './selectors';

/* global describe, it, expect */

describe('selectors', () => {
  it('should select error status', () => {
    const selectedState = {
      category: {
        loading: false,
        error: false,
        categories: [
          {
            name: 'react',
            path: 'react',
          },
        ],
      },
    };
    const expectedShape = { error: false };
    expect(getCategoryErrorStatus(selectedState)).toEqual(expectedShape);
  });

  it('should select loading status', () => {
    const selectedState = {
      category: {
        loading: false,
        error: false,
        categories: [
          {
            name: 'react',
            path: 'react',
          },
        ],
      },
    };
    const expectedShape = { loading: false };
    expect(getCategoryLoadingStatus(selectedState)).toEqual(expectedShape);
  });

  it('should select categories as an array', () => {
    const selectedState = {
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
    const expectedShape = [
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
    ];
    expect(getCategoryValues(selectedState)).toEqual(expectedShape);
  });
});
