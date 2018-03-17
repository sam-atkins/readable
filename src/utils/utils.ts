import slugify from 'slugify';
import * as _ from 'lodash';

/**
 * slugifies the post title
 * @param {string} postTitle
 */
export const slugifyPostTitle = (postTitle: string) =>
  slugify(postTitle, { lower: true, remove: /[$*_+~.()'"!\-:@?]/g });

/**
 * creates a randomId to a specified length i.e. no. of characters
 * @param {number} randomIdLength
 */
export const createRandomID = (randomIdLength: number) => {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return _.sampleSize(char, randomIdLength).join('');
};

/**
 * validates user input is valid against min and max field input lengths
 * @param {string} fieldInputType
 * @param {string} fieldInput
 */
export const userInputIsValid = (
  fieldInputType: string,
  fieldInput: string,
) => {
  const formMaxLengths = {
    title: 100,
    author: 20,
    body: 3000,
    comment: 1000,
  };
  const formMinLengths = {
    title: 1,
    author: 1,
    body: 0,
    comment: 1,
  };
  const input = fieldInput.trim();
  const maxLength = formMaxLengths[fieldInputType];
  const minLength = formMinLengths[fieldInputType];
  if (input.length >= minLength && input.length < maxLength) {
    return true;
  }
  return false;
};
