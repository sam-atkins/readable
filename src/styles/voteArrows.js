import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import { LINK_HOVER, VOTE_COUNT } from './colours';

export const StyledFaArrowUp = styled(FaArrowUp)`
  color: ${VOTE_COUNT};
  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;

export const StyledFaArrowDown = styled(FaArrowDown)`
  color: ${VOTE_COUNT};
  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;
