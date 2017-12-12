import React, { Component } from 'react';
import NavbarContainer from '../NavBarContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { StyledWrapper } from './CommentForm.styles';

class CommentForm extends Component {
  state = {};
  render() {
    return (
      <fragment>
        <StyledWrapper>
          <Header />
          <NavbarContainer />
          <div>Comment form</div>
          <Footer />
        </StyledWrapper>
      </fragment>
    );
  }
}

export default CommentForm;
