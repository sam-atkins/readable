import styled from 'styled-components';
import {
  LINK_HOVER,
  POST_BACKGROUND,
  POST_BORDER,
  POST_META,
} from '../../styles/colours';

export const CommentDiv = styled.div`
  padding: 0.2rem;
`;

export const StyledCommentBody = styled.div`
  font-size: small;
  background-color: ${POST_BACKGROUND};
  border: 0.5px solid ${POST_BORDER};
  padding: 0.5rem;
`;

export const StyledCommentMetaBold = styled.span`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;
`;

export const StyledPostMetaBoldLink = styled.div`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;
  text-decoration: none;

  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;
