import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Header from '../../components/Header';
import FormErrorMessage from '../../components/FormErrorMessage';
import FormInfoBar from '../../components/FormInfoBar';
import { getCategoryValues } from '../../selectors/categorySelectors';
import { addNewPost, editExistingPost } from '../../actions/postActions';
import { userInputIsValid } from '../../utils/utils';
import {
  StyledWrapper,
  Buffer,
  FormWrapperLabel,
  StyledForm,
  StyledTextArea,
  StyledLabel,
  StyledLabelSpan,
  StyledInput,
  StyledSelect,
  CategoryLink,
  StyledParagraph,
} from './PostForm.styles';

class PostForm extends Component {
  state = {
    // id field is required for PUT request to edit an existing post
    /* eslint-disable */
    id: this.props.postToEdit.id,
    /* eslint-enable */
    title: this.props.postToEdit.title,
    body: this.props.postToEdit.body,
    category: this.props.postToEdit.category,
    author: this.props.postToEdit.author,
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
        titleInputError: false,
        authorInputError: false,
      });

      const { author, body, title } = this.state;

      if (
        !userInputIsValid('title', title) &&
        !userInputIsValid('author', author)
      ) {
        this.setState({
          titleInputError: true,
          authorInputError: true,
        });
      } else if (!userInputIsValid('title', title)) {
        this.setState({
          titleInputError: true,
        });
      } else if (!userInputIsValid('author', author)) {
        this.setState({
          authorInputError: true,
        });
      } else if (!userInputIsValid('body', body)) {
        this.setState({
          bodyInputError: true,
        });
      } else if (this.props.edit) {
        this.props.submitFormToEditPost(this.state);
      } else {
        this.props.submitFormToAddPost(this.state);
      }
    };

    return (
      <div>
        {this.props.redirect && <Redirect to={`/${this.state.category}`} />}
        <StyledWrapper>
          <Header />
          <StyledForm onSubmit={event => handleFormSubmit(event)}>
            <FormInfoBar />
            <Buffer />
            <FormWrapperLabel>
              <StyledLabel>
                <StyledLabelSpan>*title</StyledLabelSpan>
              </StyledLabel>
            </FormWrapperLabel>
            <FormWrapperLabel>
              <StyledTextArea
                name="title"
                value={this.state.title}
                cols="20"
                rows="4"
                onChange={event => handleInputChange(event)}
              />
              {this.state.titleInputError && (
                <FormErrorMessage titleErrorMessage min={1} max={100} />
              )}
            </FormWrapperLabel>
            <Buffer />
            <FormWrapperLabel />
            <FormWrapperLabel>
              <StyledLabel>
                <StyledLabelSpan>text (optional)</StyledLabelSpan>
              </StyledLabel>
            </FormWrapperLabel>
            <FormWrapperLabel>
              <StyledTextArea
                name="body"
                value={this.state.body}
                cols="20"
                rows="8"
                onChange={event => handleInputChange(event)}
              />
              {this.state.bodyInputError && (
                <FormErrorMessage bodyErrorMessage min={0} max={2000} />
              )}
            </FormWrapperLabel>
            <Buffer />
            <FormWrapperLabel />
            <FormWrapperLabel>
              <StyledLabel>
                <StyledLabelSpan>*choose a sub-readable</StyledLabelSpan>
              </StyledLabel>
            </FormWrapperLabel>
            <FormWrapperLabel>
              <StyledSelect
                name="category"
                value={this.state.category}
                onChange={event => handleInputChange(event)}
              >
                <option disabled>Choose a sub-readable:</option>
                {this.props.categories.map(category => (
                  <option
                    name="category"
                    key={category.id}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))}
              </StyledSelect>
              <StyledParagraph>
                your subscribed sub-readables <br />
                {this.props.categories.map(category => (
                  <CategoryLink key={category.id} to={`/${category.path}`}>
                    {category.name}{' '}
                  </CategoryLink>
                ))}
              </StyledParagraph>
            </FormWrapperLabel>
            {!this.props.edit && (
              <div>
                <FormWrapperLabel>
                  <StyledLabel>
                    <StyledLabelSpan>*username</StyledLabelSpan>
                  </StyledLabel>
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
              </div>
            )}
            <p>*required</p>
            <Buffer />
            <div>
              <input type="submit" value="submit" />
            </div>
          </StyledForm>
        </StyledWrapper>
      </div>
    );
  }
}

PostForm.propTypes = {
  categories: PropTypes.array.isRequired,
  submitFormToAddPost: PropTypes.func.isRequired,
  submitFormToEditPost: PropTypes.func.isRequired,
  postToEdit: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }),
  redirect: PropTypes.bool,
  edit: PropTypes.bool.isRequired,
};

PostForm.defaultProps = {
  postToEdit: {
    id: '',
    title: '',
    body: '',
    category: 'react',
    author: '',
  },
  redirect: false,
};

const mapStateToProps = state => ({
  categories: getCategoryValues(state),
  redirect: state.post.postStatus.redirect,
  edit: state.post.postStatus.edit,
  postId: state.post.postStatus.postIdForEditing,
  postToEdit: state.post[state.post.postStatus.postIdForEditing],
});

const mapDispatchToProps = dispatch => ({
  submitFormToAddPost: (payload) => {
    dispatch(addNewPost(payload));
  },
  submitFormToEditPost: (payload) => {
    dispatch(editExistingPost(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
