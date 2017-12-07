import slugify from 'slugify';
import _ from 'lodash';

export const slugifyPostTitle = postTitle =>
  slugify(postTitle, { lower: true, remove: /[$*_+~.()'"!\-:@?]/g });

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const createRandomID = number => _.sampleSize(char, number).join('');

export const userInputIsValid = (type, fieldInput) => {

  const formMaxLengths = {
    title: 100,
    author: 20,
    body: 3000,
  };

  const formMinLengths = {
    title: 1,
    author: 1,
    body: 0,
  };

  const input = fieldInput.trim();

  const maxLength = formMaxLengths[type];
  const minLength = formMinLengths[type];


  if (input.length >= minLength && input.length < maxLength) {
    return true;
  }

  return false;
};
