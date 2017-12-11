import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleRedirect } from '../../actions/postActions';
import { NewPostButtonArrow, NewPostButtonText } from './NewPostButton.styles';

const NewPostButton = props => (
  <NewPostButtonArrow to="/newpost">
    <NewPostButtonText onClick={() => props.resetRedirect()}>
      Submit a new text post
    </NewPostButtonText>
  </NewPostButtonArrow>
);

NewPostButton.propTypes = {
  resetRedirect: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
};

const mapDispatchToProps = dispatch => ({
  resetRedirect: () => dispatch(toggleRedirect()),
});

export default connect(null, mapDispatchToProps)(NewPostButton);
