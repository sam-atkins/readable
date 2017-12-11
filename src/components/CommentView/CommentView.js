import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const CommentView = ({ comment }) => (
  <div>
    <span>{comment.body}</span>
    <span>{comment.author}</span>
    <span>{comment.voteScore}</span>
    <span>{comment.timestamp}</span>
  </div>
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
