import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navbar from './Navbar';
import CategoryPostViewContainer from '../containers/CategoryPostViewContainer';
import Footer from './Footer';
import PageWrapper from '../styles/pagewrapper';

const HomePageWrapper = () => (
  <StyledWrapper>
    <Header />
    <Navbar />
    <CategoryPostViewContainer />
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

export default HomePageWrapper;
