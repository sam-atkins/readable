import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navbar from './Navbar';

const PageWrapper = () => (
  <StyledWrapper>
    <Header />
    <Navbar />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export default PageWrapper;
