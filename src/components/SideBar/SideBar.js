import React from 'react';
import NewPostButton from '../NewPostButton';
import { SideBarMessageWrapper, SideBarText } from './SideBar.styles';

const SideBar = () => (
  <SideBarMessageWrapper>
    <SideBarText>Sidebar</SideBarText>
    <NewPostButton />
  </SideBarMessageWrapper>
);

export default SideBar;
