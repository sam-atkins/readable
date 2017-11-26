import React from 'react';
import styled from 'styled-components';
import {
  NEW_POST_BUTTON_BACKGROUND,
  NEW_POST_BUTTON_TEXT,
} from '../styles/colours';

const NewPostButton = () => (
  <NewPostButtonWrapper>
    <NewPostButtonText>Submit a new text post</NewPostButtonText>
  </NewPostButtonWrapper>
);

const NewPostButtonWrapper = styled.div`
  grid-column: col 3;
  grid-row: 2;
  text-align: center;
  background-color: ${NEW_POST_BUTTON_BACKGROUND};
`;

const NewPostButtonText = styled.p`
  color: ${NEW_POST_BUTTON_TEXT};
`;

export default NewPostButton;
