import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.div`
  grid-column: col 1 / span 3;
  grid-row: 1;
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

export const AppTitle = styled.h1`
  font-size: 1.5em;
`;
