import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import NoMatchText from './NoMatchText';
import SideBar from '../components/SideBar';
import { PageWrapper } from '../styles/pagewrapper';

const NoMatchWrapper = () => (
  <StyledWrapper>
    <Header />
    <SideBar />
    <NoMatchText />
  </StyledWrapper>
);

const StyledWrapper = styled(PageWrapper)``;

export default NoMatchWrapper;
