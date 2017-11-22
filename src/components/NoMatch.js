import React from 'react';
import styled from 'styled-components';

const NoMatch = () => (
  <NoMatchWrapper>
    <NoMatchText>404. Oh dear, no content here!</NoMatchText>
  </NoMatchWrapper>
);

const NoMatchWrapper = styled.div`
  text-align: center;
`;

const NoMatchText = styled.p`
  color: #dc143c;
`;

export default NoMatch;
