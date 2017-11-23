import React from 'react';
import styled from 'styled-components';
import NavBarContainer from './NavBarContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

import PageWrapper from '../styles/pagewrapper';

const PostPageContainer = ({ match }) => (
  <StyledWrapper>
    <Header />
    <NavBarContainer />
    <div>This is a page with one post. Id: {match.params.postId} Slug: {match.params.postSlug}</div>
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

export default PostPageContainer;
