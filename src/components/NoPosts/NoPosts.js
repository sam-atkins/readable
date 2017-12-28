import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { StyledWrapper, NoPostsText, NoPostsWrapper } from './NoPosts.styles';
import SideBar from '../SideBar';

const NoPosts = () => (
  <StyledWrapper>
    <Header />
    <SideBar />
    <NoPostsWrapper>
      <NoPostsText>Nothing to see here.</NoPostsText>
    </NoPostsWrapper>
    <Footer />
  </StyledWrapper>
);

export default NoPosts;
