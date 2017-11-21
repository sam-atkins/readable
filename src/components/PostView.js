import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { getPostErrorStatus, getPostLoadingStatus } from '../utils/selectors';

const PostView = (props) => {
  const { post, error, loading } = props;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <PostWrapper>
      <StyledVoteCount>
        <FaArrowUp />
        <br />
        {post.voteScore}
        <br />
        <FaArrowDown />
      </StyledVoteCount>
      <StyledPostMetaWrapper>
        <StyledPostTitle>{post.title}</StyledPostTitle>
        <StyledPostMeta>
          Submitted on {post.timestamp} by {post.author}
        </StyledPostMeta>
      </StyledPostMetaWrapper>
      <StyledPostBody>{post.body}</StyledPostBody>
      <StyledCommentWrapper>
        <StyledPostMetaBold>{post.commentCount} comments</StyledPostMetaBold>
        <StyledPostMetaBold>edit</StyledPostMetaBold>
        <StyledPostMetaBold>delete</StyledPostMetaBold>
      </StyledCommentWrapper>
    </PostWrapper>
  );
};

PostView.propTypes = {
  post: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(2, [col] 1fr);
  grid-template-rows: repeat(3, [row] 1fr);
  grid-gap: 2px;
  grid-auto-rows: minmax(200px, auto);
`;

const StyledVoteCount = styled.div`
  grid-column-start: 1;
  span: 1;
  grid-row-start: 2;
  color: #c6c6c6;
  text-align: center;
`;

const StyledPostMetaWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 1;
`;

const StyledPostTitle = styled.h3`
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

const StyledCommentWrapper = styled.div`
  grid-column-start: 2;
  grid-row: 3;
`;

const StyledPostMetaBold = styled.span`
  color: #888;
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;
`;

const mapStateToProps = state => ({
  error: getPostErrorStatus(state),
  loading: getPostLoadingStatus(state),
});

export default connect(mapStateToProps)(PostView);
