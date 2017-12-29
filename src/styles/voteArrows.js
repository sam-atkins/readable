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
  :active {
    color: #FF8B60;
  }
  :not(:active) {
    transition: color 500ms step-end;
  }
`;

export const StyledFaArrowDown = styled(FaArrowDown)`
  color: ${VOTE_COUNT};
  margin-top: 0.1rem;
  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
  :active {
    color: #FF8B60;
  }
  :not(:active) {
    transition: color 500ms step-end;
  }
`;
