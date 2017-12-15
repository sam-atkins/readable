import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCommentPost } from '../../actions/commentActions';
import {
  Buffer,
  FormWrapperLabel,
  StyledButton,
  StyledForm,
  StyledLabel,
  StyledTextArea,
  StyledInput,
} from './CommentForm.styles';

class CommentForm extends Component {
  state = {
    // parentId field is required for requests to add/edit a comment
    /* eslint-disable */
    parentId: this.props.parentId,
    /* eslint-enable */
    body: this.props.body,
    author: this.props.author,
  };

  render() {
    const handleInputChange = (event) => {
      const { name, value } = event.target;

      this.setState({
        [name]: value,
      });
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.submitFormToAddComment(this.state);
      this.setState({
        body: '',
        author: '',
      });
    };

    return (
      <StyledForm>
        <Buffer />
        <FormWrapperLabel>
          <StyledLabel>Comment</StyledLabel>
        </FormWrapperLabel>
        <FormWrapperLabel>
          <StyledTextArea
            value={this.state.body}
            name="body"
            cols="20"
            rows="8"
            onChange={event => handleInputChange(event)}
          />
        </FormWrapperLabel>
        <FormWrapperLabel>
          <StyledLabel>Username</StyledLabel>
        </FormWrapperLabel>
        <FormWrapperLabel>
          <StyledInput
            name="author"
            value={this.state.author}
            onChange={event => handleInputChange(event)}
          />
        </FormWrapperLabel>
        <Buffer />
        <StyledButton onClick={event => handleFormSubmit(event)}>
          save
        </StyledButton>
      </StyledForm>
    );
  }
}

CommentForm.propTypes = {
  body: PropTypes.string,
  author: PropTypes.string,
  parentId: PropTypes.string.isRequired,
  submitFormToAddComment: PropTypes.func.isRequired,
};

CommentForm.defaultProps = {
  body: '',
  author: '',
};

const mapDispatchToProps = dispatch => ({
  submitFormToAddComment: (payload) => {
    dispatch(addCommentPost(payload));
  },
});

export default connect(null, mapDispatchToProps)(CommentForm);
