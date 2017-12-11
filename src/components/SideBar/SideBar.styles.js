import styled from 'styled-components';
import { SIDEBAR_TEXT } from '../../styles/colours';

export const SideBarMessageWrapper = styled.div`
  grid-column: col 3;
  grid-row: 2;
  text-align: center;
  margin-right: 20px;
`;

export const SideBarText = styled.p`
  color: ${SIDEBAR_TEXT};
`;
