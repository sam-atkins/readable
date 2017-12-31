import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  NAV_ANCHOR,
  NAV_ANCHOR_ACTIVE,
  NAV_WRAPPER_BACKGROUND,
} from '../../styles/colours';

export const NavWrapper = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${NAV_WRAPPER_BACKGROUND};
  white-space: nowrap;
  text-transform: uppercase;
  width: 100%;
  border: none;
  padding-left: 5px;

  position:relative @media (max-width: 700px) {
    width: 95%;
  }
`;

export const NavAnchor = styled(NavLink)`
  color: ${NAV_ANCHOR};
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: ${NAV_ANCHOR_ACTIVE};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const NavItem = styled.li`
  display: flex;
  flex: 1;
  text-align: center;
  text-transform: uppercase;
  font-size: x-small;
  line-height: 18px;
`;

export const SpanSeparator = styled.span`
  color: gray;
  margin: 0px 0.7ex 0px 0.7ex;
  cursor: default;
  :last-child {
    padding-top: 1.5px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  max-width: 10%;
  padding: 0;
`;
