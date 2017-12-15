import styled from 'styled-components';
import {
  COMMENT_BUTTON_CANCEL_BACKGROUND,
  COMMENT_BUTTON_EDIT_BACKGROUND,
  COMMENT_BUTTON_TEXT,
  FORM_BUFFER_BACKGROUND,
} from '../../styles/colours';

export const Buffer = styled.div`
  background-color: ${FORM_BUFFER_BACKGROUND};
  padding: 7px;
`;

export const FormWrapperLabel = styled.div`
  padding-top: 2px;
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 0 20px;
  padding: 1em;

  display: block;
  width: 100%;
  font-size: 14px;
  height: 100%;
  line-height: 20px;
  padding: 6px 12px;
  background-image: none;
`;

export const StyledTextArea = styled.textarea`
  width: 400px;
  height: auto;
  resize: vertical;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
`;

export const StyledLabel = styled.label``;

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
`;

export const StyledCancelButton = StyledSaveButton.extend`
  background: ${COMMENT_BUTTON_CANCEL_BACKGROUND};
`;
