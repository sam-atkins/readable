import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledHeader, AppHeader, AppLogo, AppTitle } from './Header.styles';
import NavbarContainer from '../../containers/NavBarContainer';
import TabMenu from '../TabMenu';

const Header = () => (
  <StyledHeader>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle>readable</AppTitle>
    </AppHeader>
    <NavbarContainer />
    <TabMenu />
  </StyledHeader>
);

export default Header;
