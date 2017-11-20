import React from 'react';
import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

const VoteScore = () => (
  <StyledVoteCount>
    <FaArrowUp />
    <br />
    10
    <br />
    <FaArrowDown />
  </StyledVoteCount>
);

const StyledVoteCount = styled.div`
  grid-column-start: 1;
  span: 1;
  grid-row-start: 2;
  color: #c6c6c6;
  text-align: center;
`;

export default VoteScore;
