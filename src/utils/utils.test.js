/* global describe, it, expect */

import { slugifyPostTitle, userInputIsValid } from './utils';

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

describe('validates user input', () => {
  it('should return true if string is greater than 0', () => {
    const fieldInput = 'a';
    const num = 0;
    const type = 'greater';
    expect(userInputIsValid(fieldInput, num, type)).toBeTruthy();
  });

  it('should return true if string is greater than 0', () => {
    const fieldInput = 'hello';
    const num = 0;
    const type = 'greater';
    expect(userInputIsValid(fieldInput, num, type)).toBeTruthy();
  });

  it('should return false if string is empty', () => {
    const fieldInput = '';
    const num = 0;
    const type = 'greater';
    expect(userInputIsValid(fieldInput, num, type)).toBeFalsy();
  });

  it('should return true if string is less than 12', () => {
    const fieldInput = 'hello world';
    const num = 12;
    const type = 'less';
    expect(userInputIsValid(fieldInput, num, type)).toBeTruthy();
  });

  it('should return false if string is greater than 10', () => {
    const fieldInput = 'hello world';
    const num = 10;
    const type = 'less';
    expect(userInputIsValid(fieldInput, num, type)).toBeFalsy();
  });
});
