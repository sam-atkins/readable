import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PostView from '../components/PostView';
import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
  getPostValues,
} from '../utils/selectors';

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
            <SortPostsMenu>
              <option disabled>Sort posts by:</option>
              <option>Sort by score</option>
              <option>Sort by date</option>
            </SortPostsMenu>
          </CategoryContent>
          {posts.reduce((postArray, post) => {
            if (post.category === cat.id) {
              return [...postArray, <PostView post={post} key={post.id} />];
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

const CategoryViewWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

const CategoryPostWrapper = styled.div``;

const CategoryContent = styled.div`
  margin-left: 1rem;
`;

const CategoryHeader = styled.h2`
  grid-column-start: 1;
  grid-row-start: 1;
  text-decoration: underline;
`;

const SortPostsMenu = styled.select`
  grid-column-start: 1;
  grid-row-start: 1;
  cursor: pointer;
`;

const mapStateToProps = state => ({
  categories: getCategoryValues(state),
  categoryError: getCategoryErrorStatus(state),
  categoryLoading: getCategoryLoadingStatus(state),
  posts: getPostValues(state),
});

export default connect(mapStateToProps)(CategoryPostViewContainer);
