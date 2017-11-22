import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBarContainer from './NavBarContainer';
import Footer from '../components/Footer';
import PageWrapper from '../styles/pagewrapper';
import PostView from '../components/PostView';
import { filterPostsByParam } from '../selectors/postSelectors';

const CategoryPageContainer = ({ match, posts }) => (
  <StyledWrapper>
    <Header />
    <NavBarContainer />
    {posts.map(post => <PostView key={post.id} post={post} />)}
    <Footer />
  </StyledWrapper>
);

CategoryPageContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

const StyledWrapper = styled(PageWrapper)``;

const mapStateToProps = (state, ownProps) => ({
  posts: filterPostsByParam(state, ownProps.match.params.category),
});

export default connect(mapStateToProps)(CategoryPageContainer);
