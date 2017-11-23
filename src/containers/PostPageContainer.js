import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBarContainer from './NavBarContainer';
import Header from '../components/Header';
import PostView from '../components/PostView';
import Footer from '../components/Footer';
import { selectPostByPostId, validPostUrl } from '../selectors/postSelectors';

import PageWrapper from '../styles/pagewrapper';

const PostPageContainer = ({ selectedPost, validPostUrlId, match }) => (
  <StyledWrapper>
    <Header />
    <NavBarContainer />
    {selectedPost.map(post => <PostView post={post} />)}
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

const mapStateToProps = (state, ownProps) => ({
  selectedPost: selectPostByPostId(state, ownProps.match.params.postId),
  validPostUrlId: validPostUrl(state, ownProps.match.params.postId),
});

export default connect(mapStateToProps)(PostPageContainer);
