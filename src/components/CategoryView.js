import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostView from './PostView';

const CategoryView = props => (
  <ViewWrapper>
    <CategoryContent>
      <CategoryHeader>{props.category.name}</CategoryHeader>
      <PostView />
    </CategoryContent>
  </ViewWrapper>
);

const ViewWrapper = styled.div`
  grid-column: col 1 / span 3;
  display: flex;
`;

const CategoryContent = styled.div`
  margin-left: 1rem;
`;

const CategoryHeader = styled.h2`
  text-decoration: underline;
`;

CategoryView.propTypes = {
  category: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default CategoryView;
