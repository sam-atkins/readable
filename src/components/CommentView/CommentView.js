import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import {
  cancelRequestDeleteComment,
  processCommentDeletion,
  requestDeleteComment,
  toggleCommentViewToEdit,
  persistVoteComment,
} from '../../actions/commentActions';
import selectItemForDeletion from '../../selectors/selectors';
import {
  CommentDiv,
  StyledCommentBody,
  StyledMetaBold,
  StyledMetaBoldWarning,
  StyledMetaBoldCancel,
  StyledPostMetaBoldLink,
} from './CommentView.styles';
import {
  StyledFaArrowDown,
  StyledFaArrowUp,
  StyledVoteCount,
} from '../../styles/voteArrows';

const CommentView = ({
  comment,
  requestDeleteCommentStatus,
  toggleView,
  userCancelDeleteRequest,
  confirmedDeleteCommentRequest,
  userRequestDeleteComment,
  userVoteComment,
}) => (
  <CommentDiv>
    <StyledCommentBody>{comment.body}</StyledCommentBody>
    <StyledMetaBold>
      Submitted {distanceInWordsToNow(comment.timestamp)} ago by{' '}
      {comment.author}
    </StyledMetaBold>
    <StyledVoteCount>
      <StyledFaArrowUp
        onClick={() => userVoteComment(comment.id, 'upVote', 'comments')}
      />
      <StyledMetaBold>{comment.voteScore}</StyledMetaBold>
      <StyledFaArrowDown
        onClick={() => userVoteComment(comment.id, 'downVote', 'comments')}
      />
    </StyledVoteCount>
    <StyledPostMetaBoldLink onClick={() => toggleView(comment.id)}>
      edit
    </StyledPostMetaBoldLink>
    {!requestDeleteCommentStatus && (
      <StyledPostMetaBoldLink
        onClick={() => userRequestDeleteComment(comment.id)}
      >
        delete
      </StyledPostMetaBoldLink>
    )}
    {requestDeleteCommentStatus && (
      <Fragment>
        <StyledMetaBold>are you sure?</StyledMetaBold>
        <StyledMetaBoldWarning
          onClick={() => confirmedDeleteCommentRequest(comment.id)}
        >
          yes
        </StyledMetaBoldWarning>
        <StyledMetaBold>/</StyledMetaBold>
        <StyledMetaBoldCancel onClick={() => userCancelDeleteRequest()}>
          no
        </StyledMetaBoldCancel>
      </Fragment>
    )}
  </CommentDiv>
);

CommentView.propTypes = {
  comment: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    body: PropTypes.string,
    voteScore: PropTypes.number,
  }),
  requestDeleteCommentStatus: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired,
  userCancelDeleteRequest: PropTypes.func.isRequired,
  confirmedDeleteCommentRequest: PropTypes.func.isRequired,
  userRequestDeleteComment: PropTypes.func.isRequired,
  userVoteComment: PropTypes.func.isRequired,
};

CommentView.defaultProps = {
  comment: {
    title: '',
    author: '',
    timestamp: '',
    body: '',
    voteScore: '',
  },
};

const mapStateToProps = (state, ownProps) => ({
  requestDeleteCommentStatus: selectItemForDeletion(
    state.comments.commentStatus.requestDelete,
    ownProps.comment.id,
    state.comments.commentStatus.commentIdForDeletion
  ),
});

const mapDispatchToProps = dispatch => ({
  toggleView: (payload) => {
    dispatch(toggleCommentViewToEdit(payload));
  },
  userRequestDeleteComment: (payload) => {
    dispatch(requestDeleteComment(payload));
  },
  confirmedDeleteCommentRequest: (payload) => {
    dispatch(processCommentDeletion(payload));
  },
  userCancelDeleteRequest: (payload) => {
    dispatch(cancelRequestDeleteComment(payload));
  },
  userVoteComment: (id, voteDirection, voteType) => {
    dispatch(persistVoteComment(id, voteDirection, voteType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentView);
