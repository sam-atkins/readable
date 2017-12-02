import slugify from 'slugify';
import _ from 'lodash';

export const slugifyPostTitle = postTitle =>
  slugify(postTitle, { lower: true, remove: /[$*_+~.()'"!\-:@]/g });

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const createRandomID = number => (_.sampleSize(char, number).join(''));
