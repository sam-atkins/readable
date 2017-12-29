import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import PostView from '../components/PostView';
import NoMatchWrapper from '../components/NoMatchWrapper';
import NoPosts from '../components/NoPosts';
import SideBar from '../components/SideBar';
import PageWrapper from '../styles/pagewrapper';
import { validCategoryUrl } from '../selectors/categorySelectors';
import { getPostValues } from '../selectors/postSelectors';

const CategoryPageContainer = ({ posts, validUrl }) => {
  if (!validUrl) {
    return <NoMatchWrapper />;
  }

  if (posts.length === 0) {
    return <NoPosts />;
  }

  return (
    <StyledWrapper>
      <Header />
      <SideBar />
      <PostGridWrapper>
        {posts.map(post => (
          <PostView key={post.id} post={post} homeFlag={false} />
        ))}
      </PostGridWrapper>
    </StyledWrapper>
  );
};

CategoryPageContainer.propTypes = {
  posts: PropTypes.array,
  validUrl: PropTypes.bool.isRequired,
};

CategoryPageContainer.defaultProps = {
  posts: [],
};

const StyledWrapper = styled(PageWrapper)``;

const PostGridWrapper = styled.div`
  justify-self: stretch;
  display: subgrid;
`;

const mapStateToProps = (state, ownProps) => ({
  validUrl: validCategoryUrl(state, ownProps.match.params.categoryUrl),
  posts: getPostValues(
    state,
    state.post.sortPosts.sortBy,
    ownProps.match.params.categoryUrl
  ),
});

export default connect(mapStateToProps)(CategoryPageContainer);
