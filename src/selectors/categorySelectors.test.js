import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
  validCategoryUrl,
} from './categorySelectors';

/* global describe, it, expect */

describe('selectors for category', () => {
  it('should select category loading status', () => {
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

  it('should select category error status', () => {
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

  it('should fail gracefully if categories are undefined', () => {
    const selectedState = {
      category: {
        categoryStatus: { error: true, loading: false },
      },
    };
    const expectedShape = [];
    expect(getCategoryValues(selectedState)).toEqual(expectedShape);
  });

  it('should confirm a category url is valid', () => {
    const selectedState = {
      category: {
        react: { name: 'react', path: 'react' },
        redux: { name: 'redux', path: 'redux' },
        udacity: { name: 'udacity', path: 'udacity' },
        categoryStatus: { error: false, loading: false },
      },
    };
    const urlParam = 'react';
    expect(validCategoryUrl(selectedState, urlParam)).toBeTruthy();
  });

  it('should confirm a category url is invalid', () => {
    const selectedState = {
      category: {
        react: { name: 'react', path: 'react' },
        redux: { name: 'redux', path: 'redux' },
        udacity: { name: 'udacity', path: 'udacity' },
        categoryStatus: { error: false, loading: false },
      },
    };
    const urlParam = 'python';
    expect(validCategoryUrl(selectedState, urlParam)).toBeFalsy();
  });
});
