import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import { LINK_HOVER, VOTE_COUNT } from './colours';

export const StyledFaArrowUp = styled(FaArrowUp)`
  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;

export const StyledFaArrowDown = styled(FaArrowDown)`
  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;

export const StyledVoteCount = styled.div`
  grid-column-start: 1;
  span: 1;
  grid-row-start: 2;
  color: ${VOTE_COUNT};
  text-align: center;
`;
