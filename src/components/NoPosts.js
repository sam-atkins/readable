import React from 'react';
import styled from 'styled-components';
import NavBarContainer from '../containers/NavBarContainer';
import Header from './Header';
import Footer from './Footer';
import PageWrapper from '../styles/pagewrapper';
import { POST_META } from '../styles/colours';

const NoPosts = () => (
  <StyledWrapper>
    <Header />
    <NavBarContainer />
    <NoPostsWrapper>
      <NoPostsText>Nothing to see here.</NoPostsText>
    </NoPostsWrapper>
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

const NoPostsWrapper = styled.div`
  text-align: center;
`;

const NoPostsText = styled.p`
  color: ${POST_META};
`;

export default NoPosts;
