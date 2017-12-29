import styled from 'styled-components';
import {
  LINK_HOVER,
  POST_BACKGROUND,
  POST_BORDER,
  POST_META,
  TEXT_WARNING,
  VOTE_COUNT,
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

export const StyledVoteCount = styled.div`
  color: ${VOTE_COUNT};
`;

export const StyledMetaBold = styled.span`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;
`;

export const StyledMetaBoldVoteCount = StyledMetaBold.extend`
  padding-left: 1em;
`;

export const StyledPostMetaBoldLink = styled.a`
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

export const StyledMetaBoldWarning = StyledPostMetaBoldLink.extend`
  color: ${TEXT_WARNING};
`;

export const StyledMetaBoldCancel = StyledPostMetaBoldLink.extend`
  color: ${TEXT_WARNING};
`;
