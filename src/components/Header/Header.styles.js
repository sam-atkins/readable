import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: span 4;
`;

export const AppHeader = styled.div`
  display: flex;
  background-color: #222;
  height: 50px;
  padding-left: 10px;
  color: #222;
  background-color: #d1e3f6;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLink = styled(Link)`
  text-decoration: none;
  padding: 0.3rem;
`;

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 40px;
`;

export const AppTitle = styled.span`
  font-size: 1.5em;
  color: #272b2e;
`;
