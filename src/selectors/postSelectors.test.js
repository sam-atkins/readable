/* global describe, it, expect */

import {
  convertPostObjToArray,
  getPostLoadingStatus,
  getPostErrorStatus,
  getPostValues,
  selectPostByPostId,
  sortPostsByHighestVote,
  sortPostsByLowestVote,
  sortPostsByNewestDate,
  sortPostsByOldestDate,
  validPostUrl,
} from './postSelectors';

const selectPostsInState = {
  post: {
    z60i1tsf: {
      id: 'z60i1tsf',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false,
      commentCount: 2,
    },
    '2v3d8ayl': {
      id: '2v3d8ayl',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology.',
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
        postStatus: { addNewPostError: true, loading: false },
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
    const expectedShape = [
      {
        id: 'z60i1tsf',
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
        id: '2v3d8ayl',
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
    expect(getPostValues(selectPostsInState)).toEqual(expectedShape);
  });

  it('should convert an object to array of objects', () => {
    const initialObject = {
      z60i1tsf: {
        id: 'z60i1tsf',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
      },
      '2v3d8ayl': {
        id: '2v3d8ayl',
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
    };
    const expectedArray = [
      {
        id: 'z60i1tsf',
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
        id: '2v3d8ayl',
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
    expect(convertPostObjToArray(initialObject)).toEqual(expectedArray);
  });

  it('should filter posts by param', () => {
    const urlParam = 'redux';
    const expectedShape = [
      {
        id: '2v3d8ayl',
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
    expect(getPostValues(selectPostsInState, null, urlParam)).toEqual(expectedShape);
  });

  it('should filter posts by param and deleted property', () => {
    const initialState = {
      post: {
        ni6ok3ym: {
          id: 'ni6ok3ym',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body:
            'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: -5,
          deleted: true,
          commentCount: 0,
        },
        postStatus: {
          error: false,
          loading: false,
        },
      },
    };
    const urlParam = 'redux';
    const expectedShape = [];
    expect(getPostValues(initialState, null, urlParam)).toEqual(expectedShape);
  });

  it('should filter by param and deleted, and sort by votes', () => {
    const initialState = {
      post: {
        z60i1tsf: {
          id: 'z60i1tsf',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2,
        },
        '2v3d8ayl': {
          id: '2v3d8ayl',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body:
            'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'react',
          voteScore: -5,
          deleted: false,
          commentCount: 0,
        },
        mi6ok3ym: {
          id: 'mi6ok3ym',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body:
            'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: 1,
          deleted: false,
          commentCount: 0,
        },
        ni6ok3ym: {
          id: 'ni6ok3ym',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body:
            'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'react',
          voteScore: -5,
          deleted: true,
          commentCount: 0,
        },
        postStatus: {
          error: false,
          loading: false,
        },
      },
    };
    const sort = 'HIGHEST_VOTE';
    const urlParam = 'react';
    const expectedShape = [
      {
        id: 'z60i1tsf',
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
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'react',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
      },
    ];
    expect(getPostValues(initialState, sort, urlParam)).toEqual(expectedShape);
  });

  it('should select a post by the url postId}', () => {
    const postId = '2v3d8ayl';
    const expectedShape = [
      {
        id: '2v3d8ayl',
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
    expect(selectPostByPostId(selectPostsInState, postId)).toEqual(expectedShape);
  });

  it('should return empty array if invalid url postId}', () => {
    const postId = 'djklsjdio3jek2391';
    const expectedShape = [];
    expect(selectPostByPostId(selectPostsInState, postId)).toEqual(expectedShape);
  });

  it('should return true for a correct post url', () => {
    const postCategoryUrl = 'redux';
    const postId = '2v3d8ayl';
    const postTitleSlug = 'learn-redux-in-10-minutes';
    expect(validPostUrl(selectPostsInState, postCategoryUrl, postId, postTitleSlug)).toBeTruthy();
  });

  it('should return false for an incorrect post categoryUrl', () => {
    const postCategoryUrl = 'react';
    const postId = '2v3d8ayl';
    const postTitleSlug = 'learn-redux-in-10-minutes';
    expect(validPostUrl(selectPostsInState, postCategoryUrl, postId, postTitleSlug)).toBeFalsy();
  });

  it('should return false for an incorrect postId', () => {
    const postCategoryUrl = 'redux';
    const postId = 'odo2010dkdie';
    const postTitleSlug = 'learn-redux-in-10-minutes';
    expect(validPostUrl(selectPostsInState, postCategoryUrl, postId, postTitleSlug)).toBeFalsy();
  });

  it('should return false for an incorrect post slug', () => {
    const postCategoryUrl = 'redux';
    const postId = '2v3d8ayl';
    const postTitleSlug = 'learn-redux-in-ten-minutes';
    expect(validPostUrl(selectPostsInState, postCategoryUrl, postId, postTitleSlug)).toBeFalsy();
  });

  it('should sort posts by highest vote', () => {
    const initialArray = [
      {
        id: 'z60i1tsf',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
      {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn React',
        voteScore: 5,
      },
    ];
    const sortedArray = [
      {
        id: 'z60i1tsf',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
      {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn React',
        voteScore: 5,
      },
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
    ];
    expect(sortPostsByHighestVote(initialArray)).toEqual(sortedArray);
  });

  it('should sort posts by lowest vote', () => {
    const initialArray = [
      {
        id: 'z60i1tsf',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
      {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn React',
        voteScore: 5,
      },
    ];
    const sortedArray = [
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
      {
        id: 'ni6ok3ym',
        timestamp: 1468479767190,
        title: 'Learn React',
        voteScore: 5,
      },
      {
        id: 'z60i1tsf',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
    ];
    expect(sortPostsByLowestVote(initialArray)).toEqual(sortedArray);
  });

  it('should sort posts by newest first', () => {
    const initialArray = [
      {
        id: 'z60i1tsf',
        timestamp: 1567166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
      {
        id: 'ni6ok3ym',
        timestamp: 1868479767190,
        title: 'Learn React',
        voteScore: 5,
      },
    ];
    const sortedArray = [
      {
        id: 'ni6ok3ym',
        timestamp: 1868479767190,
        title: 'Learn React',
        voteScore: 5,
      },
      {
        id: 'z60i1tsf',
        timestamp: 1567166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
    ];
    expect(sortPostsByNewestDate(initialArray)).toEqual(sortedArray);
  });

  it('should sort posts by oldest first', () => {
    const initialArray = [
      {
        id: 'z60i1tsf',
        timestamp: 1567166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
      {
        id: 'ni6ok3ym',
        timestamp: 1868479767190,
        title: 'Learn React',
        voteScore: 5,
      },
    ];
    const sortedArray = [
      {
        id: '2v3d8ayl',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        voteScore: -5,
      },
      {
        id: 'z60i1tsf',
        timestamp: 1567166872634,
        title: 'Udacity is the best place to learn React',
        voteScore: 6,
      },
      {
        id: 'ni6ok3ym',
        timestamp: 1868479767190,
        title: 'Learn React',
        voteScore: 5,
      },
    ];
    expect(sortPostsByOldestDate(initialArray)).toEqual(sortedArray);
  });
});
