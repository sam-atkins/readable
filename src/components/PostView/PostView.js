import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Loading from '../Loading';
import Error from '../Error';
import NoMatchText from '../NoMatchText';
import CommentView from '../CommentView';
import {
  getPostErrorStatus,
  getPostLoadingStatus,
  selectPostForDeletion,
} from '../../selectors/postSelectors';
import {
  cancelRequestDeletePost,
  requestDeletePost,
  processPostDeletion,
  selectPostToEdit,
} from '../../actions/postActions';
import selectComments from '../../selectors/commentSelectors';
import { slugifyPostTitle } from '../../utils/utils';
import {
  PostWrapper,
  StyledCommentWrapper,
  StyledPostBody,
  StyledPostMeta,
  StyledPostMetaBold,
  StyledPostMetaBoldLink,
  StyledPostMetaBoldWarning,
  StyledPostMetaWrapper,
  StyledVoteCount,
  PostTitleLink,
} from './PostView.styles';

const PostView = ({
  post,
  comments,
  error,
  loading,
  commentsFlag,
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
        <StyledPostMetaBoldLink
          to={`/${post.category}/${post.id}/${slugifyPostTitle(post.title)}`}
        >
          {post.commentCount} comments
        </StyledPostMetaBoldLink>
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
        {commentsFlag &&
          comments.map(comment => (
            <CommentView key={comment.id} comment={comment} />
          ))}
      </StyledCommentWrapper>
    </PostWrapper>
  );
};

PostView.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  homeFlag: PropTypes.bool,
  postPage: PropTypes.bool,
  commentsFlag: PropTypes.bool,
  requestDeletePostStatus: PropTypes.bool.isRequired,
  userRequestDeletePost: PropTypes.func.isRequired,
  confirmedDeletePostRequest: PropTypes.func.isRequired,
  submitPostToEdit: PropTypes.func.isRequired,
  userCancelDeleteRequest: PropTypes.func.isRequired,
};

PostView.defaultProps = {
  homeFlag: false,
  postPage: false,
  commentsFlag: false,
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

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
