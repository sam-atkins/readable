import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toggleRedirect } from '../actions/postActions';
import {
  NEW_POST_BUTTON_BACKGROUND,
  NEW_POST_BUTTON_TEXT,
} from '../styles/colours';

const NewPostButton = () => (
  <NewPostButtonArrow to="/newpost" onClick={toggleRedirect()}>
    <NewPostButtonText>Submit a new text post</NewPostButtonText>
  </NewPostButtonArrow>
);

const NewPostButtonArrow = styled(Link)`
  grid-column: col 3;
  grid-row: 2;
  text-align: center;
  background: ${NEW_POST_BUTTON_BACKGROUND};
  display: inline-block;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -25px;
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-right: 25x solid transparent;
    border-bottom: 25px solid transparent;
    border-left: 25px solid ${NEW_POST_BUTTON_BACKGROUND};
  }
`;

const NewPostButtonText = styled.p`
  color: ${NEW_POST_BUTTON_TEXT};
`;

const mapDispatchToProps = dispatch => ({
  resetRedirect: () => dispatch(toggleRedirect()),
});

export default connect(null, mapDispatchToProps)(NewPostButton);
