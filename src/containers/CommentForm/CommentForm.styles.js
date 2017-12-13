import styled from 'styled-components';
import PageWrapper from '../../styles/pagewrapper';
import {
  FORM_BUFFER_BACKGROUND,
  FORM_WRAPPER_LABEL_BACKGROUND,
} from '../../styles/colours';

export const StyledWrapper = styled(PageWrapper)``;

export const Buffer = styled.div`
  background-color: ${FORM_BUFFER_BACKGROUND};
  padding: 7px;
`;

export const FormWrapperLabel = styled.div`
  padding-top: 2px;
  background-color: ${FORM_WRAPPER_LABEL_BACKGROUND};
`;

export const StyledForm = styled.form`
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

export const StyledLabelSpan = styled.span`
  padding-left: 10px;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: auto;
  resize: vertical;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
`;

export const StyledSelect = styled.select`
  padding: 0 10px 0 10px;
  margin-left: 10px;
`;
