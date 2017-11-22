import {
  getPostLoadingStatus,
  getPostErrorStatus,
  getPostValues,
} from './postSelectors';

/* global describe, it, expect */

describe('selectors for posts', () => {
  it('should select post loading status', () => {
    const selectedState = {
      post: {
        postStatus: { error: false, loading: false },
      },
    };
    const expectedShape = false;
    expect(getPostLoadingStatus(selectedState)).toEqual(expectedShape);
  });

  it('should select post error status', () => {
    const selectedState = {
      post: {
        postStatus: { error: true, loading: false },
      },
    };
    const expectedShape = true;
    expect(getPostErrorStatus(selectedState)).toEqual(expectedShape);
  });

  it('should fail gracefully if posts are undefined', () => {
    const selectedState = {
      post: {
        postStatus: { error: true, loading: false },
      },
    };
    const expectedShape = [];
    expect(getPostValues(selectedState)).toEqual(expectedShape);
  });

  it('should select posts as an array', () => {
    const selectedState = {
      post: {
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
        postStatus: {
          error: false,
          loading: false,
        },
      },
    };
    const expectedShape = [
      {
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
      {
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
    ];
    expect(getPostValues(selectedState)).toEqual(expectedShape);
  });
});
