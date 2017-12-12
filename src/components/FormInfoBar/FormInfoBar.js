import React from 'react';
import { FormH1, InfoBar } from './FormInfoBar.styles';

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

export default FormInfoBar;
