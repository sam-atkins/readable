import styled from 'styled-components';
import {
  FORM_INFOBAR_BORDER,
  FORM_INFOBAR_BACKGROUND,
} from '../../styles/colours';

export const FormH1 = styled.h1`
  font-size: 18px;
  font-weight: normal;
`;

export const InfoBar = styled.div`
  background-color: ${FORM_INFOBAR_BACKGROUND};
  border-color: ${FORM_INFOBAR_BORDER};
  border-style: solid;
  border-width: 1px;
  font-size: small;
  padding: 5px;
`;
