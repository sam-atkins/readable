import styled from 'styled-components';
import { LINK_HOVER, SIDEBAR_TEXT } from '../../styles/colours';

export const FooterWrapper = styled.div`
  grid-column: col 2 / span 1;
  grid-row-start: 3;
  grid-row-end: 4;
  align-self: end;
  margin-bottom: 1rem;
`;

export const FooterText = styled.div`
  font-size: 0.8em;
  color: ${SIDEBAR_TEXT};

  a {
    color: ${SIDEBAR_TEXT};
  }

  a:hover {
    color: ${LINK_HOVER};
  }
`;
