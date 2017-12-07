import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import NavbarContainer from '../containers/NavBarContainer';
import Header from '../components/Header';
import FormErrorMessage from '../components/FormErrorMessage';
import FormInfoBar from '../components/FormInfoBar';
import Footer from '../components/Footer';
import PageWrapper from '../styles/pagewrapper';
import { getCategoryValues } from '../selectors/categorySelectors';
import { addNewPost } from '../actions/postActions';
import {
  FORM_BUFFER_BACKGROUND,
  FORM_WRAPPER_LABEL_BACKGROUND,
} from '../styles/colours';
import { userInputIsValid } from '../utils/utils';

class NewPostForm extends Component {
  state = {
    title: this.props.title,
    body: this.props.body,
    category: this.props.category,
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
      } else {
        this.props.submitFormToAddPost(this.state);
      }
    };

    return (
      <div>
        {this.props.redirect && <Redirect to={`/${this.state.category}`} />}
        <StyledWrapper>
          <Header />
          <NavbarContainer />
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
            <p>*required</p>
            <Buffer />
            <div>
              <input type="submit" value="submit" />
            </div>
          </StyledForm>
          <Footer />
        </StyledWrapper>
      </div>
    );
  }
}

NewPostForm.propTypes = {
  categories: PropTypes.array.isRequired,
  submitFormToAddPost: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
  redirect: PropTypes.bool,
};

NewPostForm.defaultProps = {
  title: '',
  body: '',
  category: 'react',
  author: '',
  redirect: false,
};

const StyledWrapper = styled(PageWrapper)``;

const Buffer = styled.div`
  background-color: ${FORM_BUFFER_BACKGROUND};
  padding: 7px;
`;

const FormWrapperLabel = styled.div`
  padding-top: 2px;
  background-color: ${FORM_WRAPPER_LABEL_BACKGROUND};
`;

const StyledForm = styled.form`
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

const StyledTextArea = styled.textarea`
  width: 400px;
  height: auto;
  resize: vertical;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
`;

const StyledLabel = styled.label``;

const StyledLabelSpan = styled.span`
  padding-left: 10px;
`;

const StyledInput = styled.input`
  width: 400px;
  height: auto;
  resize: vertical;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
`;

const StyledSelect = styled.select`
  padding: 0 10px 0 10px;
  margin-left: 10px;
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  padding-left: 10px;
  padding-bottom: 7px;
`;

const mapStateToProps = state => ({
  categories: getCategoryValues(state),
  redirect: state.post.postStatus.redirect,
});

const mapDispatchToProps = dispatch => ({
  submitFormToAddPost: (payload) => {
    dispatch(addNewPost(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
