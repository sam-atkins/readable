import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledHeader, AppHeader, AppLogo, AppTitle } from './Header.styles';

const Header = () => (
  <StyledHeader>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle>readable: a reddit clone built with React and Redux</AppTitle>
    </AppHeader>
  </StyledHeader>
);

export default Header;
