import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessageWrapper, ErrorText } from './FormErrorMessage.styles';

const FormErrorMessage = ({
  bodyErrorMessage,
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
    {authorErrorMessage && (
      <ErrorText>
        Oops, your username needs to be between {min} and {max} characters.
      </ErrorText>
    )}
  </ErrorMessageWrapper>
);

FormErrorMessage.propTypes = {
  bodyErrorMessage: PropTypes.bool.isRequired,
  titleErrorMessage: PropTypes.bool.isRequired,
  authorErrorMessage: PropTypes.bool.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default FormErrorMessage;
