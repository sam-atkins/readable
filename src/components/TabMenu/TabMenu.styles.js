import styled from 'styled-components';
import { LINK_HOVER } from '../../styles/colours';

export const Wrapper = styled.div`
  grid-column: col 1 / span 3;
  grid-row: 2;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`;

export const TabMenuList = styled.ul`
  /* display: flex;
  justify-content: flex-start;
  margin: 0;
  max-width: 100%;
  padding: 0; */
  list-style-type: none;
  white-space: nowrap;
  display: inline-block;
  margin-top: 5px;
  vertical-align: bottom;
`;

export const TabMenuItem = styled.li`
  box-sizing: border-box;
  display: flex;
  display: inline;
  flex: 1;
  line-height: 24px;
  padding: 10px;
  text-align: center;
  width: 20%;
  background-color: #eff7ff;
  color: #369;

  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;
