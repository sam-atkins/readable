import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import {
  CommentDiv,
  StyledCommentBody,
  StyledCommentMetaBold,
  StyledPostMetaBoldLink,
} from './CommentView.styles';

const CommentView = ({ comment }) => (
  <CommentDiv>
    <StyledCommentBody>{comment.body}</StyledCommentBody>
    <StyledCommentMetaBold>
      Submitted {distanceInWordsToNow(comment.timestamp)} ago by{' '}
      {comment.author}
    </StyledCommentMetaBold>
    <StyledCommentMetaBold>Votes: {comment.voteScore}</StyledCommentMetaBold>
    <StyledPostMetaBoldLink to="/">edit</StyledPostMetaBoldLink>
    <StyledPostMetaBoldLink to="/">delete</StyledPostMetaBoldLink>
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

export default CommentView;
