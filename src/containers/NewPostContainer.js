import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header';
import NavbarContainer from '../containers/NavBarContainer';
import Footer from '../components/Footer';
import PageWrapper from '../styles/pagewrapper';

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
            <label>
              <StyledLabelSpan>title</StyledLabelSpan>
            </label>
          </FormWrapperLabel>
          <FormWrapperLabel>
            <textarea name="" id="" cols="20" rows="2" />
          </FormWrapperLabel>
          <FormWrapperLabel />
          <FormWrapperLabel>
            <label>
              <StyledLabelSpan>text</StyledLabelSpan>
            </label>
          </FormWrapperLabel>
          <FormWrapperLabel>
            <textarea name="" id="" cols="20" rows="2" />
          </FormWrapperLabel>
          <FormWrapperLabel />
          <FormWrapperLabel>
            <label>
              <StyledLabelSpan>category</StyledLabelSpan>
            </label>
          </FormWrapperLabel>
          <FormWrapperLabel>
            <textarea name="" id="" cols="20" rows="2" />
          </FormWrapperLabel>
          <div style={{ backgroundColor: 'white', padding: '5px' }} />
          <div>
            <input type="submit" value="submit" />
          </div>
        </StyledForm>
        <Footer />
      </StyledWrapper>
    );
  }
}

const StyledWrapper = styled(PageWrapper)``;

const FormH1 = styled.h1`
  font-size: 18px;
  font-weight: normal;
`;

const InfoBar = styled.div`
  background-color: #f6e69f;
  border-color: #ffa500;
  border-style: solid;
  border-width: 1px;
  font-size: small;
  padding: 5px;
`;

const Buffer = styled.div`
  background-color: 'white';
  padding: 5px;
`;

const FormWrapperLabel = styled.div`
  background-color: #cee3f8;
`;

const StyledForm = styled.form`
  margin: 0 20px;
  /* width: 400px; */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  display: block;
  width: 100%;
  font-size: 14px;
  height: 100%;
  line-height: 20px;
  padding: 6px 12px;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 1px 1px 2px -1px rgba(0, 0, 0, 0.15);
`;

const StyledTextArea = styled.input`
  /* width: 494px
  height: auto;
  resize: vertical; */
`;

const StyledLabel = styled.label`
  /* display: inline-block;
  width: 120px;
  text-align: right;
  position: relative; */
`;

const StyledLabelSpan = styled.span`
  padding: 5px;
`;

export default connect(null)(NewPostContainer);
