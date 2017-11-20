import React from 'react';
import styled from 'styled-components';
import VoteScore from './VoteScore';

const PostView = () => (
  <PostWrapper>
    <VoteScore />
    <StyledPostMetaWrapper>
      <StyledPostTitle>Post Title</StyledPostTitle>
      <StyledPostMeta>Submitted on time/date by Author</StyledPostMeta>
    </StyledPostMetaWrapper>
    <StyledPostBody>Post Body</StyledPostBody>
    <StyledPostCommentCount>x comments</StyledPostCommentCount>
  </PostWrapper>
);

const PostWrapper = styled.div`
  display: grid;
  /* display: inline-grid; */
  /* display: subgrid; */
  grid-template-columns: 50px repeat(2, [col] 1fr);
  grid-template-rows: repeat(3, [row] 1fr);
  grid-gap: 2px;
  grid-auto-rows: minmax(200px, auto);
`;

const StyledPostMetaWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  /* span: 2; */
  grid-row: 1;
`;

const StyledPostTitle = styled.h3`
  /* padding: 0.3rem; */
  color: #0000ff;
`;

const StyledPostMeta = styled.div`
  color: #888;
  font-size: x-small;
`;

const StyledPostBody = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
  background-color: #fafafa;
  border: 0.5px solid #369;
  padding: 0.5rem;
`;

const StyledPostCommentCount = StyledPostMeta.extend`
  grid-column-start: 2;
  grid-row: 3;
  font-weight: bold;
  padding: 0 1px;
`;

export default PostView;
