import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Loading from '../Loading';
import Error from '../Error';
import NoMatchText from '../NoMatchText';
import CommentViewContainer from '../../containers/CommentViewContainer';
import CommentForm from '../../containers/CommentForm';
import {
  getPostErrorStatus,
  getPostLoadingStatus,
} from '../../selectors/postSelectors';
import selectItemForDeletion from '../../selectors/selectors';
import {
  cancelRequestDeletePost,
  requestDeletePost,
  persistVotePost,
  processPostDeletion,
  selectPostToEdit,
} from '../../actions/postActions';
import selectComments from '../../selectors/commentSelectors';
import { slugifyPostTitle } from '../../utils/utils';
import {
  PostWrapper,
  StyledCommentWrapper,
  StyledFaArrowDown,
  StyledFaArrowUp,
  StyledPostBody,
  StyledPostMeta,
  StyledPostMetaBold,
  StyledPostMetaBoldCancel,
  StyledPostMetaBoldLink,
  StyledPostMetaBoldWarning,
  StyledPostMetaWrapper,
  StyledVoteCount,
  PostTitleLink,
} from './PostView.styles';

class PostView extends Component {
  renderComments = () => {
    const { commentsFlag, comments } = this.props;
    if (commentsFlag && comments.length === 0) {
      return <div>there doesn&apos;t seem to be anything here</div>;
    } else if (commentsFlag) {
      return comments.map(comment => (
        <CommentViewContainer key={comment.id} comment={comment} />
      ));
    }
    return null;
  };

  render() {
    const {
      post,
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
      userUpVotePost,
    } = this.props;

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
          <StyledFaArrowUp
            onClick={() => userUpVotePost(post.id, 'upVote', 'posts')}
          />
          <br />
          {post.voteScore}
          <br />
          <StyledFaArrowDown
            onClick={() => userUpVotePost(post.id, 'downVote', 'posts')}
          />
        </StyledVoteCount>
        <StyledPostMetaWrapper>
          <PostTitleLink
            to={`/${post.category}/${post.id}/${slugifyPostTitle(post.title)}`}
          >
            {post.title}
          </PostTitleLink>
          <StyledPostMeta>
            Submitted {distanceInWordsToNow(post.timestamp)} ago by{' '}
            {post.author}
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
            <Fragment>
              <StyledPostMetaBold>are you sure?</StyledPostMetaBold>
              <StyledPostMetaBoldWarning
                onClick={() => confirmedDeletePostRequest(post.id)}
              >
                yes
              </StyledPostMetaBoldWarning>
              <StyledPostMetaBold>/</StyledPostMetaBold>
              <StyledPostMetaBoldCancel
                onClick={() => userCancelDeleteRequest()}
              >
                no
              </StyledPostMetaBoldCancel>
            </Fragment>
          )}
          {commentsFlag && (
            <div>
              <CommentForm parentId={post.id} />
              Comments:
            </div>
          )}
          {this.renderComments()}
        </StyledCommentWrapper>
      </PostWrapper>
    );
  }
}

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
  userUpVotePost: PropTypes.func.isRequired,
};

PostView.defaultProps = {
  homeFlag: false,
  postPage: false,
  commentsFlag: false,
};

const mapStateToProps = (state, ownProps) => ({
  error: getPostErrorStatus(state),
  loading: getPostLoadingStatus(state),
  requestDeletePostStatus: selectItemForDeletion(
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
  userUpVotePost: (id, voteDirection, voteType) => {
    dispatch(persistVotePost(id, voteDirection, voteType));
  },
  userDownVotePost: (id, voteDirection, voteType) => {
    dispatch(persistVotePost(id, voteDirection, voteType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
