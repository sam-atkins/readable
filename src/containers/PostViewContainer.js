import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PostView from '../components/PostView';
import {
  getPostValues,
  getPostErrorStatus,
  getPostLoadingStatus,
} from '../utils/selectors';

const PostViewContainer = ({ post, error, loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return post.map(p => <PostView post={p} key={p.id} />);
};

PostViewContainer.propTypes = {
  post: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  post: getPostValues(state),
  error: getPostErrorStatus(state),
  loading: getPostLoadingStatus(state),
});

export default connect(mapStateToProps)(PostViewContainer);
