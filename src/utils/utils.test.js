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
  it('should return true if title string is greater than 0, less than 100', () => {
    const type = 'title';
    const fieldInput = 'a';
    expect(userInputIsValid(type, fieldInput)).toBeTruthy();
  });

  it('should return false if title string is empty', () => {
    const type = 'title';
    const fieldInput = '';
    expect(userInputIsValid(type, fieldInput)).toBeFalsy();
  });

  it('should return false if title string is greater than 100', () => {
    const type = 'title';
    const fieldInput =
      'This is a really long title which needs to be over 100 characters. I think it needs to be even longer than that.';
    expect(userInputIsValid(type, fieldInput)).toBeFalsy();
  });

  it('should return true if author string is greater than 0, less than 20', () => {
    const type = 'author';
    const fieldInput = 'sam';
    expect(userInputIsValid(type, fieldInput)).toBeTruthy();
  });

  it('should return false if author string is empty', () => {
    const type = 'author';
    const fieldInput = '';
    expect(userInputIsValid(type, fieldInput)).toBeFalsy();
  });

  it('should return false if author string is greater than 20', () => {
    const type = 'author';
    const fieldInput = 'I have a really long name';
    expect(userInputIsValid(type, fieldInput)).toBeFalsy();
  });

  it('should return false if body string is 0', () => {
    const type = 'body';
    const fieldInput = '';
    expect(userInputIsValid(type, fieldInput)).toBeFalsy();
  });

  it('should return true if body string is 1', () => {
    const type = 'body';
    const fieldInput = 'a';
    expect(userInputIsValid(type, fieldInput)).toBeTruthy();
  });
});
