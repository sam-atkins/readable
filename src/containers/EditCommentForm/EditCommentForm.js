import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  editExistingComment,
  toggleCommentFromEditToView,
} from '../../actions/commentActions';
import { userInputIsValid } from '../../utils/utils';
import FormErrorMessage from '../../components/FormErrorMessage';
import {
  Buffer,
  ButtonWrapper,
  StyledCancelButton,
  StyledSaveButton,
  StyledForm,
  StyledTextArea,
} from './EditCommentForm.styles';

class EditCommentForm extends Component {
  state = {
    // id field is required for requests to edit a comment
    /* eslint-disable */
    id: this.props.comment.id,
    /* eslint-enable */
    body: this.props.comment.body,
  };
  render() {
    const handleInputChange = (event) => {
      const { name, value } = event.target;

      this.setState({
        [name]: value,
      });
    };

    const handleFormCancel = (event) => {
      event.preventDefault();
      this.props.toggleView(this.state.id);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      this.setState({
        commentBodyInputError: false,
      });

      const { body } = this.state;

      if (!userInputIsValid('comment', body)) {
        this.setState({
          commentBodyInputError: true,
        });
      } else {
        this.props.editComment(this.state);
      }
    };
    return (
      <StyledForm>
        <StyledTextArea
          value={this.state.body}
          name="body"
          cols="20"
          rows="3"
          onChange={event => handleInputChange(event)}
        />
        {this.state.commentBodyInputError && (
          <FormErrorMessage commentBodyErrorMessage min={1} max={1000} />
        )}
        <Buffer />
        <ButtonWrapper>
          <StyledSaveButton onClick={event => handleFormSubmit(event)}>
            save
          </StyledSaveButton>
          <StyledCancelButton onClick={event => handleFormCancel(event)}>
            cancel
          </StyledCancelButton>
        </ButtonWrapper>
      </StyledForm>
    );
  }
}

EditCommentForm.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  toggleView: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleView: (payload) => {
    dispatch(toggleCommentFromEditToView(payload));
  },
  editComment: (payload) => {
    dispatch(editExistingComment(payload));
  },
});

export default connect(null, mapDispatchToProps)(EditCommentForm);
