import React from 'react';
import NewPostButton from '../NewPostButton';
import { SideBarMessageWrapper, SideBarText } from './SideBar.styles';

const SideBar = () => (
  <SideBarMessageWrapper>
    <SideBarText>
      readable: a reddit clone built with React and Redux
    </SideBarText>
    <NewPostButton />
  </SideBarMessageWrapper>
);

export default SideBar;
