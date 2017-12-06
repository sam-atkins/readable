import React from 'react';
import styled from 'styled-components';
import NavBarContainer from '../containers/NavBarContainer';
import Header from './Header';
import Footer from './Footer';
import PageWrapper from '../styles/pagewrapper';
import { TEXT_WARNING } from '../styles/colours';

const NoMatch = () => (
  <StyledWrapper>
    <Header />
    <NavBarContainer />
    <NoMatchWrapper>
      <NoMatchText>404. Oh dear, no content here!</NoMatchText>
    </NoMatchWrapper>
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

const NoMatchWrapper = styled.div`
  text-align: center;
`;

const NoMatchText = styled.p`
  color: ${TEXT_WARNING};
`;

export default NoMatch;
