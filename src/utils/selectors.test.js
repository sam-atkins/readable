import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
} from './selectors';

/* global describe, it, expect */

describe('selectors', () => {
  it('should select loading status', () => {
    const selectedState = {
      category: {
        react: { name: 'react', path: 'react' },
        redux: { name: 'redux', path: 'redux' },
        udacity: { name: 'udacity', path: 'udacity' },
        categoryStatus: { error: false, loading: false },
      },
    };
    const expectedShape = false;
    expect(getCategoryLoadingStatus(selectedState)).toEqual(expectedShape);
  });

  it('should select error status', () => {
    const selectedState = {
      category: {
        categoryStatus: { error: true, loading: false },
      },
    };
    const expectedShape = true;
    expect(getCategoryErrorStatus(selectedState)).toEqual(expectedShape);
  });

  it('should select categories as an array', () => {
    const selectedState = {
      category: {
        react: { name: 'react', path: 'react' },
        redux: { name: 'redux', path: 'redux' },
        udacity: { name: 'udacity', path: 'udacity' },
        categoryStatus: { error: false, loading: false },
      },
    };
    const expectedShape = [
      {
        id: 'react',
        name: 'react',
        path: 'react',
      },
      {
        id: 'redux',
        name: 'redux',
        path: 'redux',
      },
      {
        id: 'udacity',
        name: 'udacity',
        path: 'udacity',
      },
    ];
    expect(getCategoryValues(selectedState)).toEqual(expectedShape);
  });

  it('should fail gracefully if categories not defined', () => {
    const selectedState = {
      category: {
        error: true,
        loading: false,
      },
    };
    const expectedShape = [];
    expect(getCategoryValues(selectedState)).toEqual(expectedShape);
  });
});
