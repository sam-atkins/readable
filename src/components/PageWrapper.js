import React from 'react';
import styled from 'styled-components';
import Header from './Header';
// import Navbar from './Navbar';
import CategoryViewContainer from '../containers/CategoryViewContainer';
import Footer from './Footer';

const PageWrapper = () => (
  <StyledWrapper>
    <Header />
    <CategoryViewContainer />
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, [col] 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(200px, auto);
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export default PageWrapper;
