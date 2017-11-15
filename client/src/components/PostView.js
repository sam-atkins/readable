import React from 'react';
import styled from 'styled-components';

const PostView = () => (
  <PostWrapper>
    <StyledPostTitle>Post Title</StyledPostTitle>
    <StyledVoteCount>x votes</StyledVoteCount>
    <StyledPostMeta>Submitted on time/date by Author</StyledPostMeta>
    <StyledPostBody>Post Body</StyledPostBody>
    <StyledPostCommentCount>x comments</StyledPostCommentCount>
  </PostWrapper>
);

const PostWrapper = styled.div``;

const StyledPostTitle = styled.h3`
  padding: 0.3rem;
`;

const StyledPostMeta = styled.div`
  color: #888;
  font-size: x-small;
`;

const StyledPostBody = styled.div`
  background-color: #fafafa;
  border: 0.5px solid #369;
  padding: 0.5rem;
`;

const StyledPostCommentCount = StyledPostMeta.extend`
  font-weight: bold;
  padding: 0 1px;
`;

const StyledVoteCount = styled.div`
  color: #c6c6c6;
`;

export default PostView;
