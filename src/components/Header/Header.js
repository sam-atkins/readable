import React from 'react';
import logo from '../../assets/logo.svg';
import {
  StyledHeader,
  AppHeader,
  AppLink,
  AppLogo,
  AppTitle,
} from './Header.styles';
import NavbarContainer from '../../containers/NavBarContainer';
import TabMenu from '../TabMenu';

const Header = () => (
  <StyledHeader>
    <NavbarContainer />
    <AppHeader>
      <AppLink to="/">
        <AppLogo src={logo} alt="logo" />
        <AppTitle>readable</AppTitle>
      </AppLink>
      <TabMenu />
    </AppHeader>
  </StyledHeader>
);

export default Header;
