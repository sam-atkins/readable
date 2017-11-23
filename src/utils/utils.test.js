/* global describe, it, expect */

import slugifyPostTitle from './utils';

describe('slugifies a post title', () => {
  it('should lower case a capitalised post title', () => {
    const postTitle = 'this is A pOst on Redux';
    const slugUrl = 'this-is-a-post-on-redux';
    expect(slugifyPostTitle(postTitle)).toBe(slugUrl);
  });

  it('should remove special characters', () => {
    const postTitle = '!!!this is a post on Redux!!';
    const slugUrl = 'this-is-a-post-on-redux';
    expect(slugifyPostTitle(postTitle)).toBe(slugUrl);
  });

  it('should remove extra dashes', () => {
    const postTitle = '   this is A post on Redux ----';
    const slugUrl = 'this-is-a-post-on-redux';
    expect(slugifyPostTitle(postTitle)).toBe(slugUrl);
  });

  it('should remove emojis', () => {
    const postTitle = 'I ♥ Redux';
    const slugUrl = 'i-love-redux';
    expect(slugifyPostTitle(postTitle)).toBe(slugUrl);
  });
});
