import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';

const Header = () => (
  <StyledHeader>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle>readable: a reddit clone built with React and Redux</AppTitle>
    </AppHeader>
  </StyledHeader>
);

const StyledHeader = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

export default Header;
