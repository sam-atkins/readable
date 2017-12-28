import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import NoMatchText from './NoMatchText';
import PageWrapper from '../styles/pagewrapper';

const NoMatchWrapper = () => (
  <StyledWrapper>
    <Header />
    <NoMatchText />
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

export default NoMatchWrapper;
