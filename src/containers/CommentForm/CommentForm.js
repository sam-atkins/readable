import React, { Component } from 'react';
import Button from '../../components/Button';
import {
  Buffer,
  FormWrapperLabel,
  StyledForm,
  StyledLabel,
  StyledTextArea,
} from './CommentForm.styles';

class CommentForm extends Component {
  state = {};
  render() {
    return (
      <StyledForm>
        <Buffer />
        <FormWrapperLabel>
          <StyledLabel>Comment</StyledLabel>
        </FormWrapperLabel>
        <FormWrapperLabel>
          <StyledTextArea />
        </FormWrapperLabel>

        <FormWrapperLabel>
          <StyledLabel>Username</StyledLabel>
        </FormWrapperLabel>
        <FormWrapperLabel>
          <StyledTextArea />
        </FormWrapperLabel>

        <Buffer />
        <Button />
      </StyledForm>
    );
  }
}

export default CommentForm;
