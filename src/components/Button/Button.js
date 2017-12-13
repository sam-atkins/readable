import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styles';

const Button = props => <StyledButton>{props.title}</StyledButton>;

Button.propTypes = {
  title: PropTypes.string,
};

Button.defaultProps = {
  title: 'save',
};

export default Button;
