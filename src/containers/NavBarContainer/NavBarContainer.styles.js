import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NAV_ANCHOR } from '../../styles/colours';

export const NavWrapper = styled.div`
  grid-column: col 1 / span 3;
  grid-row: 1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: #f0f0f0;
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
  /* color: ${NAV_ANCHOR}; */
  color: #000000;
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: #FF4500;
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
  width: 20%;
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
