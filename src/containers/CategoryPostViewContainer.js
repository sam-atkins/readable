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
  category,
  categoryError,
  categoryLoading,
  post,
}) => {
  if (categoryLoading) {
    return <Loading />;
  }

  if (categoryError) {
    return <Error />;
  }

  return (
    <CategoryViewWrapper>
      {category.map(cat => (
        <CategoryPostWrapper key={cat.id}>
          <CategoryContent>
            <CategoryHeader>{cat.name}</CategoryHeader>
            <SortPostsMenu>
              <option disabled>Sort posts by:</option>
              <option>Sort by vote</option>
              <option>Sort by comment</option>
            </SortPostsMenu>
          </CategoryContent>
          {post
            .filter(pst => cat.id === pst.category)
            .map(pst => <PostView post={pst} key={pst.id} />)}
        </CategoryPostWrapper>
      ))}
    </CategoryViewWrapper>
  );
};

CategoryPostViewContainer.propTypes = {
  category: PropTypes.array.isRequired,
  categoryLoading: PropTypes.bool.isRequired,
  categoryError: PropTypes.bool.isRequired,
  post: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  category: getCategoryValues(state),
  categoryError: getCategoryErrorStatus(state),
  categoryLoading: getCategoryLoadingStatus(state),
  post: getPostValues(state),
});

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

export default connect(mapStateToProps)(CategoryPostViewContainer);
