import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCommentPost } from '../../actions/commentActions';
import { userInputIsValid } from '../../utils/utils';
import FormErrorMessage from '../../components/FormErrorMessage';
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
      this.setState({
        bodyInputError: false,
        authorInputError: false,
      });

      const { author, body } = this.state;

      if (
        !userInputIsValid('body', body) &&
        !userInputIsValid('author', author)
      ) {
        this.setState({
          bodyInputError: true,
          authorInputError: true,
        });
      } else if (!userInputIsValid('body', body)) {
        this.setState({
          bodyInputError: true,
        });
      } else if (!userInputIsValid('author', author)) {
        this.setState({
          authorInputError: true,
        });
      } else {
        // the happy path to add a comment
        this.props.submitFormToAddComment(this.state);
        this.setState({
          body: '',
          author: '',
        });
      }
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
          {this.state.bodyInputError && (
            <FormErrorMessage commentBodyErrorMessage min={1} max={2000} />
          )}
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
          {this.state.authorInputError && (
            <FormErrorMessage authorErrorMessage min={1} max={20} />
          )}
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
