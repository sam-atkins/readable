import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBarContainer from './NavBarContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostView from '../components/PostView';
import NoMatch from '../components/NoMatch';
import NoPosts from '../components/NoPosts';
import PageWrapper from '../styles/pagewrapper';
import { validCategoryUrl } from '../selectors/categorySelectors';
import { filterPostsByParam } from '../selectors/postSelectors';

const CategoryPageContainer = ({ posts, validUrl }) => {
  if (!validUrl) {
    return (
      <NoMatch />
    );
  }

  if (posts.length === 0) {
    return (
      <NoPosts />
    );
  }

  return (
    <StyledWrapper>
      <Header />
      <NavBarContainer />
      {posts.map(post => <PostView key={post.id} post={post} />)}
      <Footer />
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

const mapStateToProps = (state, ownProps) => ({
  validUrl: validCategoryUrl(state, ownProps.match.params.categoryUrl),
  posts: filterPostsByParam(state, ownProps.match.params.categoryUrl),
});

export default connect(mapStateToProps)(CategoryPageContainer);
