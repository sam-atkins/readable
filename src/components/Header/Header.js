import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledHeader, AppHeader, AppLogo, AppTitle } from './Header.styles';
import NavbarContainer from '../../containers/NavBarContainer';
import TabMenu from '../TabMenu';

const Header = () => (
  <StyledHeader>
    <NavbarContainer />
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle>readable</AppTitle>
    </AppHeader>
    <TabMenu />
  </StyledHeader>
);

export default Header;
