import slugify from 'slugify';
import _ from 'lodash';

export const slugifyPostTitle = postTitle =>
  slugify(postTitle, { lower: true, remove: /[$*_+~.()'"!\-:@]/g });

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const createRandomID = number => _.sampleSize(char, number).join('');

// export const userInputIsValid = (fieldInput, num, type) => {
//   if (type === 'greater') {
//     if (fieldInput.length > num) {
//       return true;
//     }
//   }

//   if (type === 'less') {
//     if (fieldInput.length < num) {
//       return true;
//     }
//   }

//   return false;
// };

// TODO test
export const userInputIsValid = (type, fieldInput) => {

  const formMaxLengths = {
    title: 100,
    author: 20,
    body: 99500,
  };

  const formMinLengths = {
    title: 0,
    author: 0,
  };

  const input = fieldInput.trim();

  const maxLength = formMaxLengths[type];
  const minLength = formMinLengths[type];


  if (input.length > minLength && input.length < maxLength) {
    return true;
  }

  return false;
};
