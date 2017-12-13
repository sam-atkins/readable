import styled from 'styled-components';
import {
  COMMENT_BUTTON_BACKGROUND,
  COMMENT_BUTTON_TEXT,
} from '../../styles/colours';

const StyledButton = styled.div`
  background: linear-gradient(${COMMENT_BUTTON_BACKGROUND});
  border-radius: 4px;
  color: ${COMMENT_BUTTON_TEXT};
  cursor: pointer;
  font-size: 14px;
  line-height: 2.16;
  text-align: center;
  white-space: nowrap;
  border: 0px;
  padding: 0 1.066667em;
  min-width: 50px;
  width: 60px;
`;

export default StyledButton;
