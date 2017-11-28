import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import NavbarContainer from '../containers/NavBarContainer';
import Footer from '../components/Footer';
import PageWrapper from '../styles/pagewrapper';
import { getCategoryValues } from '../selectors/categorySelectors';
import {
  FORM_INFOBAR_BORDER,
  FORM_INFOBAR_BACKGROUND,
  FORM_BUFFER_BACKGROUND,
  FORM_WRAPPER_LABEL_BACKGROUND,
} from '../styles/colours';

class NewPostContainer extends Component {
  state = {};
  render() {
    return (
      <StyledWrapper>
        <Header />
        <NavbarContainer />
        <StyledForm>
          <FormH1>submit to readable</FormH1>
          <InfoBar>
            You are submitting a text-based post. Speak your mind. A title is
            required, but expanding further in the text field is not. Beginning
            your title with "vote up if" is violation of intergalactic law.
          </InfoBar>
          <Buffer />
          <FormWrapperLabel>
            <StyledLabel>
              <StyledLabelSpan>*title</StyledLabelSpan>
            </StyledLabel>
          </FormWrapperLabel>
          <FormWrapperLabel>
            <StyledTextArea name="" id="" cols="20" rows="4" />
          </FormWrapperLabel>
          <Buffer />
          <FormWrapperLabel />
          <FormWrapperLabel>
            <StyledLabel>
              <StyledLabelSpan>text (optional)</StyledLabelSpan>
            </StyledLabel>
          </FormWrapperLabel>
          <FormWrapperLabel>
            <StyledTextArea name="" id="" cols="20" rows="8" />
          </FormWrapperLabel>
          <Buffer />
          <FormWrapperLabel />
          <FormWrapperLabel>
            <StyledLabel>
              <StyledLabelSpan>*choose a sub-readable</StyledLabelSpan>
            </StyledLabel>
          </FormWrapperLabel>
          <FormWrapperLabel>
            <StyledInput name="" id="" />
            <StyledParagraph>
              your subscribed sub-readables <br />
              {this.props.categories.map(category => (
                <CategoryLink to={`/${category.path}`}>
                  {category.name}{' '}
                </CategoryLink>
              ))}
            </StyledParagraph>
          </FormWrapperLabel>
          <p>*required</p>
          <Buffer />
          <div>
            <input type="submit" value="submit" />
          </div>
        </StyledForm>
        <Footer />
      </StyledWrapper>
    );
  }
}

NewPostContainer.propTypes = {
  categories: PropTypes.array.isRequired,
};

const StyledWrapper = styled(PageWrapper)``;

const FormH1 = styled.h1`
  font-size: 18px;
  font-weight: normal;
`;

const InfoBar = styled.div`
  background-color: ${FORM_INFOBAR_BACKGROUND};
  border-color: ${FORM_INFOBAR_BORDER};
  border-style: solid;
  border-width: 1px;
  font-size: small;
  padding: 5px;
`;

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

const CategoryLink = styled(Link)`
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  padding-left: 10px;
  padding-bottom: 7px;
`;

const mapStateToProps = state => ({
  categories: getCategoryValues(state),
});

export default connect(mapStateToProps)(NewPostContainer);