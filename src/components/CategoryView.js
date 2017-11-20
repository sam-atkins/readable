import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostView from './PostView';

const CategoryView = props => (
  <ViewWrapper>
    <CategoryContent>
      <CategoryHeader>{props.category.name}</CategoryHeader>
      <SortPostsMenu>
        <option disabled>Sort posts by:</option>
        <option>Sort by vote</option>
        <option>Sort by comment</option>
      </SortPostsMenu>
    </CategoryContent>
    <PostView />
  </ViewWrapper>
);

const ViewWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

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

CategoryView.propTypes = {
  category: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default CategoryView;
