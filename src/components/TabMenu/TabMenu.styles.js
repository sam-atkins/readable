import styled from 'styled-components';
import {
  LINK_HOVER,
  TAB_MENU_TEXT,
  TAB_MENU_TEXT_HIGHLIGHTED,
  TAB_MENU_BACKGROUND,
  TAB_MENU_BACKGROUND_HIGHLIGHTED,
  TAB_MENU_SEPARATOR,
} from '../../styles/colours';

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
  background-color: ${props =>
    (props.highlighted ? TAB_MENU_BACKGROUND_HIGHLIGHTED : TAB_MENU_BACKGROUND)};
  color: ${props =>
    (props.highlighted ? TAB_MENU_TEXT_HIGHLIGHTED : TAB_MENU_TEXT)};
  font-size: small;
  font-weight: bold;
  border: 1px solid #5f99cf;
  border-bottom: 1px solid white;

  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;

export const TabMenuItemSeparator = styled.span`
  background-color: ${TAB_MENU_SEPARATOR};
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;
