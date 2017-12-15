import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessageWrapper, ErrorText } from './FormErrorMessage.styles';

const FormErrorMessage = ({
  bodyErrorMessage,
  commentBodyErrorMessage,
  titleErrorMessage,
  authorErrorMessage,
  min,
  max,
}) => (
  <ErrorMessageWrapper>
    {titleErrorMessage && (
      <ErrorText>
        Oops, your post title needs to be between {min} and {max} characters.
      </ErrorText>
    )}
    {bodyErrorMessage && (
      <ErrorText>
        Oops, the text cannot be longer than {max} characters.
      </ErrorText>
    )}
    {commentBodyErrorMessage && (
      <ErrorText>
        Oops, your comment needs to be between {min} and {max} characters.
      </ErrorText>
    )}
    {authorErrorMessage && (
      <ErrorText>
        Oops, your username needs to be between {min} and {max} characters.
      </ErrorText>
    )}
  </ErrorMessageWrapper>
);

FormErrorMessage.propTypes = {
  bodyErrorMessage: PropTypes.bool,
  commentBodyErrorMessage: PropTypes.bool,
  titleErrorMessage: PropTypes.bool,
  authorErrorMessage: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

FormErrorMessage.defaultProps = {
  bodyErrorMessage: false,
  commentBodyErrorMessage: false,
  titleErrorMessage: false,
  authorErrorMessage: false,
};

export default FormErrorMessage;
