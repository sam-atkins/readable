import React from 'react';
import styled from 'styled-components';
import { TEXT_404 } from '../styles/colours';

const Error = () => (
  <ErrorMessageWrapper>
    <ErrorText>Oh dear, something went wrong!</ErrorText>
  </ErrorMessageWrapper>
);

const ErrorMessageWrapper = styled.div`
  text-align: center;
`;

const ErrorText = styled.p`
  color: ${TEXT_404};
`;

export default Error;
