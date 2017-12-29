import styled from 'styled-components';
import {
  COMMENT_BUTTON_CANCEL_BACKGROUND,
  COMMENT_BUTTON_EDIT_BACKGROUND,
  COMMENT_BUTTON_TEXT,
  FORM_BUFFER_BACKGROUND,
} from '../../styles/colours';

export const Buffer = styled.div`
  background-color: ${FORM_BUFFER_BACKGROUND};
`;

export const StyledForm = styled.form`
  display: flex;

  display: block;
  width: 100%;
  font-size: 14px;
  height: 100%;
  line-height: 20px;
  background-image: none;
`;

export const StyledTextArea = styled.textarea`
  width: 400px;
  height: auto;
  resize: vertical;
  margin: 7px;
  border: 1px solid gray;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const StyledSaveButton = styled.div`
  background: ${COMMENT_BUTTON_EDIT_BACKGROUND};
  border-radius: 4px;
  color: ${COMMENT_BUTTON_TEXT};
  cursor: pointer;
  font-size: x-small;
  line-height: 2.16;
  text-align: center;
  white-space: nowrap;
  border: 0px;
  padding: 0 1.066667em;
  min-width: 50px;
  width: 60px;

  :last-child {
    margin-left: 5px;
  }
`;

export const StyledCancelButton = StyledSaveButton.extend`
  background: ${COMMENT_BUTTON_CANCEL_BACKGROUND};
`;
