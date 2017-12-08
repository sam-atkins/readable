import React from 'react';
import styled from 'styled-components';
import { TEXT_WARNING } from '../styles/colours';

const NoMatch = () => (
  <NoMatchDiv>
    <NoMatchText>Oh dear, no content here!</NoMatchText>
  </NoMatchDiv>
);

const NoMatchDiv = styled.div`
  text-align: center;
`;

const NoMatchText = styled.p`
  color: ${TEXT_WARNING};
`;

export default NoMatch;
