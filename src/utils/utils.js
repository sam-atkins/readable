import slugify from 'slugify';

const slugifyPostTitle = postTitle =>
  slugify(postTitle, { lower: true, remove: /[$*_+~.()'"!\-:@]/g });

export default slugifyPostTitle;
