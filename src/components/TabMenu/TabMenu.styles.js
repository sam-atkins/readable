import styled from 'styled-components';
import { LINK_HOVER } from '../../styles/colours';

export const TabMenuList = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;
  max-width: 100%;
  padding: 0;
  list-style-type: none;
  white-space: nowrap;
  display: inline-block;
  margin-top: 30px;
  vertical-align: bottom;
`;

export const TabMenuItem = styled.li`
  box-sizing: border-box;
  display: flex;
  display: inline;
  flex: 1;
  line-height: 24px;
  padding: 2px 6px 1px 6px;
  text-align: center;
  width: 20%;
  background-color: #eff7ff;
  color: #369;
  font-size: small;
  font-weight: bold;

  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;

export const TabMenuItemSeparator = styled.span`
  background-color: #d1e3f6;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;
