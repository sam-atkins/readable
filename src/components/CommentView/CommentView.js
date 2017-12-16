import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { toggleCommentViewToEdit } from '../../actions/commentActions';
import {
  CommentDiv,
  StyledCommentBody,
  StyledCommentMetaBold,
  StyledPostMetaBoldLink,
} from './CommentView.styles';

const CommentView = ({ comment, toggleView }) => (
  <CommentDiv>
    <StyledCommentBody>{comment.body}</StyledCommentBody>
    <StyledCommentMetaBold>
      Submitted {distanceInWordsToNow(comment.timestamp)} ago by{' '}
      {comment.author}
    </StyledCommentMetaBold>
    <StyledCommentMetaBold>Votes: {comment.voteScore}</StyledCommentMetaBold>
    <StyledPostMetaBoldLink onClick={() => toggleView(comment.id)}>
      edit
    </StyledPostMetaBoldLink>
    <StyledPostMetaBoldLink>delete</StyledPostMetaBoldLink>
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
  toggleView: PropTypes.func.isRequired,
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

const mapStateToDispatch = dispatch => ({
  toggleView: (payload) => {
    dispatch(toggleCommentViewToEdit(payload));
  },
});

export default connect(null, mapStateToDispatch)(CommentView);
