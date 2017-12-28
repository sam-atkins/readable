import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledHeader, AppHeader, AppLogo, AppTitle } from './Header.styles';
import NavbarContainer from '../../containers/NavBarContainer';
import TabMenu from '../TabMenu';

const Header = () => (
  <StyledHeader>
    <NavbarContainer />
    <AppHeader to="/">
      <AppLogo src={logo} alt="logo" />
      <AppTitle>readable</AppTitle>
      <TabMenu />
    </AppHeader>
  </StyledHeader>
);

export default Header;
