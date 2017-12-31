import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PostView from '../../components/PostView';
import {
  getPostErrorStatus,
  getPostLoadingStatus,
  getPostValues,
} from '../../selectors/postSelectors';
import { ContentWrapper } from './RootPageContainer.styles';

const RootPageContainer = ({ loadingError, contentLoading, posts }) => {
  if (contentLoading) {
    return <Loading />;
  }

  if (loadingError) {
    return <Error />;
  }

  return (
    <ContentWrapper>
      {posts.reduce((postArray, post) => {
        if (post.deleted === false) {
          return [
            ...postArray,
            <PostView post={post} key={post.id} homeFlag />,
          ];
        }
        return postArray;
      }, [])}
    </ContentWrapper>
  );
};

RootPageContainer.propTypes = {
  loadingError: PropTypes.bool.isRequired,
  contentLoading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  loadingError: getPostErrorStatus(state),
  contentLoading: getPostLoadingStatus(state),
  posts: getPostValues(state, state.post.sortPosts.sortBy),
});

export default connect(mapStateToProps)(RootPageContainer);
