import React from 'react';
import styled from 'styled-components';

const Error = () => (
  <ErrorMessageWrapper>
    <ErrorText>Oh dear, something went wrong!</ErrorText>
  </ErrorMessageWrapper>
);

const ErrorMessageWrapper = styled.div`
  text-align: center;
`;

const ErrorText = styled.p`
  color: #DC143C;
`;

export default Error;
