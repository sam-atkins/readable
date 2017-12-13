import React, { Component } from 'react';
import Button from '../../components/Button';
import {
  Buffer,
  FormWrapperLabel,
  StyledForm,
  StyledLabel,
  StyledTextArea,
  StyledInput,
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
          <StyledTextArea cols="20" rows="8" />
        </FormWrapperLabel>

        <FormWrapperLabel>
          <StyledLabel>Username</StyledLabel>
        </FormWrapperLabel>
        <FormWrapperLabel>
          <StyledInput />
        </FormWrapperLabel>
        <Buffer />
        <Button />
      </StyledForm>
    );
  }
}

export default CommentForm;
