import slugify from 'slugify';
import _ from 'lodash';

export const slugifyPostTitle = postTitle =>
  slugify(postTitle, { lower: true, remove: /[$*_+~.()'"!\-:@]/g });

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const createRandomID = number => _.sampleSize(char, number).join('');

export const userInputIsValid = (fieldInput, num, type) => {
  if (type === 'greater') {
    if (fieldInput.length > num) {
      return true;
    }
  }

  if (type === 'less') {
    if (fieldInput.length < num) {
      return true;
    }
  }

  return false;
};
