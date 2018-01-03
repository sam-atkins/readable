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
  justify-self: stretch;
  display: subgrid;
  padding-left: 2rem;
  grid-template-columns: 50px repeat(2, [col] 1fr);
  grid-template-rows: repeat(3, [row] 1fr);
  grid-gap: 2px;
  grid-auto-rows: auto;
`;

export const StyledPostMetaWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row: 1;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const FlexDiv1 = styled.div`
  flex: 1;
`;

export const FlexDiv2 = styled.div`
  flex: 3;
`;

export const StyledVoteCount = styled.span`
  color: ${VOTE_COUNT};
  padding-top: 0.1rem;
  padding-left: 0.2rem;
  padding: 0.1rem;
  margin: .5rem;
`;

export const PostTitleLink = styled(Link)`
  color: ${POST_TITLE};
  margin-left: -2.5rem;
`;

export const StyledPostMeta = styled.div`
  color: ${POST_META};
  font-size: x-small;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  margin-bottom: 0.3rem;
`;

export const StyledPostBody = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
  background-color: ${POST_BACKGROUND};
  border: 0.5px solid ${POST_BORDER};
  padding: 0.5rem;
  margin-left: 2rem;
`;

export const StyledCommentWrapper = styled.div`
  grid-column-start: 2;
  grid-row: 3;
  margin-left: 2.2rem;
  margin-bottom: 1.5rem;
`;

export const ExistingCommentsWrapper = styled.div`
  padding-top: 0.5rem;
  font-size: 16px;
  font-weight: normal;
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
