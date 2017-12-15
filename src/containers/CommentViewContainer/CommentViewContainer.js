import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentView from '../../components/CommentView';

class CommentViewContainer extends Component {
  renderViewOrForm = () => {
    const { comment, toggleView, commentIdForEditing } = this.props;
    if (toggleView && comment.id === commentIdForEditing) {
      return <div>edit this comment, id: {comment.id}</div>;
    }
    return <CommentView key={comment.id} comment={comment} />;
  };
  render() {
    return <Fragment>{this.renderViewOrForm()}</Fragment>;
  }
}

CommentViewContainer.propTypes = {
  comment: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    body: PropTypes.string,
    voteScore: PropTypes.number,
  }),
  toggleView: PropTypes.bool,
  commentIdForEditing: PropTypes.string,
};

CommentViewContainer.defaultProps = {
  comment: {
    title: '',
    author: '',
    timestamp: '',
    body: '',
    voteScore: '',
  },
  toggleView: false,
  commentIdForEditing: '',
};

const mapStateToProps = state => ({
  toggleView: state.comments.commentStatus.commentEditViewToggle,
  commentIdForEditing: state.comments.commentStatus.commentIdForEditing,
});

export default connect(mapStateToProps)(CommentViewContainer);
