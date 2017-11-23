import React from 'react';
import styled from 'styled-components';
import { TEXT_404 } from '../styles/colours';

const NoMatch = () => (
  <NoMatchWrapper>
    <NoMatchText>404. Oh dear, no content here!</NoMatchText>
  </NoMatchWrapper>
);

const NoMatchWrapper = styled.div`
  text-align: center;
`;

const NoMatchText = styled.p`
  color: ${TEXT_404};
`;

export default NoMatch;
