import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NAV_ANCHOR } from '../../styles/colours';

export const NavAnchor = styled(Link)`
  /* color: ${NAV_ANCHOR}; */
  color: #000000;
  text-decoration: none;
`;

export const NavItem = styled.li`
  box-sizing: border-box;
  display: flex;
  display: inline-block;
  flex: 1;
  line-height: 24px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 20%;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  max-width: 100%;
  padding: 0;
`;

export const NavWrapper = styled.div`
  grid-column: col 1 / span 3;
  grid-row: 1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  background-color: #f0f0f0;

  @media (max-width: 700px) {
    width: 95%;
  }
`;
