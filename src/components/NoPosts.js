import React from 'react';
import styled from 'styled-components';
import { POST_META } from '../styles/colours';

const NoPosts = () => (
  <NoPostsWrapper>
    <NoPostsText>Nothing to see here.</NoPostsText>
  </NoPostsWrapper>
);

const NoPostsWrapper = styled.div`
  text-align: center;
`;

const NoPostsText = styled.p`
  color: ${POST_META};
`;

export default NoPosts;
