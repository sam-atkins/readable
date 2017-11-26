import React from 'react';
import styled from 'styled-components';
import NewPostButton from './NewPostButton';
import { SIDEBAR_TEXT } from '../styles/colours';

const SideBar = () => (
  <SideBarMessageWrapper>
    <SideBarText>Sidebar</SideBarText>
    <NewPostButton />
  </SideBarMessageWrapper>
);

const SideBarMessageWrapper = styled.div`
  grid-column: col 3;
  grid-row: 2;
  text-align: center;
  margin-right: 20px;
`;

const SideBarText = styled.p`
  color: ${SIDEBAR_TEXT};
`;

export default SideBar;
