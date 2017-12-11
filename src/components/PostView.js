import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Loading from './Loading';
import Error from './Error';
import NoMatchText from './NoMatchText';
import CommentView from './CommentView';
import {
  getPostErrorStatus,
  getPostLoadingStatus,
  selectPostForDeletion,
} from '../selectors/postSelectors';
import {
  cancelRequestDeletePost,
  requestDeletePost,
  processPostDeletion,
  selectPostToEdit,
} from '../actions/postActions';
import selectComments from '../selectors/commentSelectors';
import {
  LINK_HOVER,
  POST_BACKGROUND,
  POST_BORDER,
  POST_META,
  POST_TITLE,
  TEXT_WARNING,
  VOTE_COUNT,
} from '../styles/colours';
import { slugifyPostTitle } from '../utils/utils';

const PostView = ({
  post,
  comments,
  error,
  loading,
  homeFlag,
  postPage,
  requestDeletePostStatus,
  confirmedDeletePostRequest,
  submitPostToEdit,
  userCancelDeleteRequest,
  userRequestDeletePost,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (postPage && post.deleted === true) {
    return <NoMatchText />;
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
        <PostTitleLink
          to={`/${post.category}/${post.id}/${slugifyPostTitle(post.title)}`}
        >
          {post.title}
        </PostTitleLink>
        <StyledPostMeta>
          Submitted {distanceInWordsToNow(post.timestamp)} ago by {post.author}
        </StyledPostMeta>
      </StyledPostMetaWrapper>
      {!homeFlag && <StyledPostBody>{post.body}</StyledPostBody>}
      <StyledCommentWrapper>
        <StyledPostMetaBold>{post.commentCount} comments</StyledPostMetaBold>
        <StyledPostMetaBoldLink
          to="/newpost"
          onClick={() => submitPostToEdit(post.id)}
        >
          edit
        </StyledPostMetaBoldLink>
        {!requestDeletePostStatus && (
          <StyledPostMetaBold onClick={() => userRequestDeletePost(post.id)}>
            delete
          </StyledPostMetaBold>
        )}
        {requestDeletePostStatus && (
          <div>
            <StyledPostMetaBoldWarning
              onClick={() => confirmedDeletePostRequest(post.id)}
            >
              confirm delete?
            </StyledPostMetaBoldWarning>
            <StyledPostMetaBold onClick={() => userCancelDeleteRequest()}>
              cancel
            </StyledPostMetaBold>
          </div>
        )}
        {!homeFlag &&
          comments.map(comment => (
            <CommentView key={comment.id} comment={comment} />
          ))}
      </StyledCommentWrapper>
    </PostWrapper>
  );
};

PostView.propTypes = {
  post: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  homeFlag: PropTypes.bool,
  postPage: PropTypes.bool,
  requestDeletePostStatus: PropTypes.bool.isRequired,
  userRequestDeletePost: PropTypes.func.isRequired,
  confirmedDeletePostRequest: PropTypes.func.isRequired,
  submitPostToEdit: PropTypes.func.isRequired,
  userCancelDeleteRequest: PropTypes.func.isRequired,
};

PostView.defaultProps = {
  homeFlag: false,
  postPage: false,
};

const mapStateToProps = (state, ownProps) => ({
  error: getPostErrorStatus(state),
  loading: getPostLoadingStatus(state),
  requestDeletePostStatus: selectPostForDeletion(
    state.post.postStatus.requestDelete,
    ownProps.post.id,
    state.post.postStatus.postIdForDeletion
  ),
  comments: selectComments(state.comments, ownProps.post.id),
});

const mapDispatchToProps = dispatch => ({
  submitPostToEdit: (payload) => {
    dispatch(selectPostToEdit(payload));
  },
  userRequestDeletePost: (payload) => {
    dispatch(requestDeletePost(payload));
  },
  confirmedDeletePostRequest: (payload) => {
    dispatch(processPostDeletion(payload));
  },
  userCancelDeleteRequest: () => {
    dispatch(cancelRequestDeletePost());
  },
});

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
  color: ${VOTE_COUNT};
  text-align: center;
`;

const StyledPostMetaWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 1;
`;

const PostTitleLink = styled(Link)`
  color: ${POST_TITLE};
`;

const StyledPostMeta = styled.div`
  color: ${POST_META};
  font-size: x-small;
`;

const StyledPostBody = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
  background-color: ${POST_BACKGROUND};
  border: 0.5px solid ${POST_BORDER};
  padding: 0.5rem;
`;

const StyledCommentWrapper = styled.div`
  grid-column-start: 2;
  grid-row: 3;
`;

const StyledPostMetaBoldLink = styled(Link)`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;
  text-decoration: none;

  :hover {
    color: ${LINK_HOVER};
  }
`;

const StyledPostMetaBold = styled.span`
  color: ${POST_META};
  font-size: x-small;
  font-weight: bold;
  padding-right: 1rem;

  :hover {
    color: ${LINK_HOVER};
    cursor: pointer;
  }
`;

const StyledPostMetaBoldWarning = StyledPostMetaBold.extend`
  color: ${TEXT_WARNING};
`;

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
