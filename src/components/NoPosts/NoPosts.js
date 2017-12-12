import React from 'react';
import NavBarContainer from '../../containers/NavBarContainer';
import Header from '../Header';
import Footer from '../Footer';
import { StyledWrapper, NoPostsText, NoPostsWrapper } from './NoPosts.styles';

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

export default NoPosts;
