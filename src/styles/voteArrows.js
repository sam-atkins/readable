import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import { LINK_HOVER } from './colours';

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
