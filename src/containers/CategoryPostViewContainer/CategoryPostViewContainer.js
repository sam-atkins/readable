import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PostView from '../../components/PostView';
import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
} from '../../selectors/categorySelectors';
import { getPostValues } from '../../selectors/postSelectors';
import {
  CategoryViewWrapper,
  CategoryPostWrapper,
  CategoryContent,
  CategoryHeader,
} from './CategoryPostViewContainer.styles';

const CategoryPostViewContainer = ({
  categories,
  categoryError,
  categoryLoading,
  posts,
}) => {
  if (categoryLoading) {
    return <Loading />;
  }

  if (categoryError) {
    return <Error />;
  }

  return (
    <CategoryViewWrapper>
      {categories.map(cat => (
        <CategoryPostWrapper key={cat.id}>
          <CategoryContent>
            <CategoryHeader>{cat.name}</CategoryHeader>
          </CategoryContent>
          {posts.reduce((postArray, post) => {
            if (post.category === cat.id && post.deleted === false) {
              return [
                ...postArray,
                <PostView post={post} key={post.id} homeFlag />,
              ];
            }
            return postArray;
          }, [])}
        </CategoryPostWrapper>
      ))}
    </CategoryViewWrapper>
  );
};

CategoryPostViewContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryLoading: PropTypes.bool.isRequired,
  categoryError: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  categories: getCategoryValues(state),
  categoryError: getCategoryErrorStatus(state),
  categoryLoading: getCategoryLoadingStatus(state),
  posts: getPostValues(state, state.post.sortPosts.sortBy),
});

export default connect(mapStateToProps)(CategoryPostViewContainer);
