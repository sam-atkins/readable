import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TEXT_WARNING } from '../styles/colours';

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

const ErrorMessageWrapper = styled.div`
  margin-left: 0.8rem;
  padding-bottom: 0.2rem;
`;

const ErrorText = styled.p`
  color: ${TEXT_WARNING};
`;

FormErrorMessage.propTypes = {
  bodyErrorMessage: PropTypes.bool.isRequired,
  titleErrorMessage: PropTypes.bool.isRequired,
  authorErrorMessage: PropTypes.bool.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default FormErrorMessage;
