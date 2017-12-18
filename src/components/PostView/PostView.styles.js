import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  LINK_HOVER,
  POST_BACKGROUND,
  POST_BORDER,
  POST_META,
  POST_TITLE,
  TEXT_WARNING,
  VOTE_COUNT,
} from '../../styles/colours';

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(2, [col] 1fr);
  grid-template-rows: repeat(3, [row] 1fr);
  grid-gap: 2px;
  grid-auto-rows: minmax(200px, auto);
`;

export const StyledVoteCount = styled.div`
  grid-column-start: 1;
  span: 1;
  grid-row-start: 2;
  color: ${VOTE_COUNT};
  text-align: center;
`;

export const StyledPostMetaWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 1;
`;

export const PostTitleLink = styled(Link)`
  color: ${POST_TITLE};
`;

export const StyledPostMeta = styled.div`
  color: ${POST_META};
  font-size: x-small;
`;

export const StyledPostBody = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
  background-color: ${POST_BACKGROUND};
  border: 0.5px solid ${POST_BORDER};
  padding: 0.5rem;
`;

export const StyledCommentWrapper = styled.div`
  grid-column-start: 2;
  grid-row: 3;
`;

export const StyledPostMetaBoldLink = styled(Link)`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;
  text-decoration: none;

  :hover {
    color: ${LINK_HOVER};
  }
`;

export const StyledPostMetaBold = styled.span`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;

  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;

export const StyledPostMetaBoldWarning = StyledPostMetaBold.extend`
  color: ${TEXT_WARNING};
`;

export const StyledPostMetaBoldCancel = StyledPostMetaBold.extend`
  color: ${TEXT_WARNING};
`;
