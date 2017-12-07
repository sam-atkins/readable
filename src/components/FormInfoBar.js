import React from 'react';
import styled from 'styled-components';
import {
  FORM_INFOBAR_BORDER,
  FORM_INFOBAR_BACKGROUND,
} from '../styles/colours';

const FormInfoBar = () => (
  <div>
    <FormH1>submit to readable</FormH1>
    <InfoBar>
      You are submitting a text-based post. Speak your mind. A title is
      required, but expanding further in the text field is not. Beginning your
      title with "vote up if" is violation of intergalactic law.
    </InfoBar>
  </div>
);

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

export default FormInfoBar;
