import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import Header from '../components/Header';
import PostView from '../components/PostView';
import NoMatchWrapper from '../components/NoMatchWrapper';
import SideBar from '../components/SideBar';
import PageWrapper from '../styles/pagewrapper';
import { selectPostByPostId, validPostUrl } from '../selectors/postSelectors';
import { fetchComments } from '../actions/commentActions';

class PostPageContainer extends Component {
  componentDidMount() {
    const { selectedPost, getComments } = this.props;
    if (selectedPost[0]) {
      getComments(selectedPost[0].id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.selectedPost[0], nextProps.selectedPost[0])) {
      nextProps.getComments(nextProps.selectedPost[0].id);
    }
  }

  render() {
    if (!this.props.validPostUrlSlug) {
      return <NoMatchWrapper />;
    }

    if (this.props.selectedPost.deleted === true) {
      return <NoMatchWrapper />;
    }
    return (
      <StyledWrapper>
        <Header />
        <SideBar />
        {this.props.selectedPost.map(post => (
          <PostView
            key={post.id}
            post={post}
            homeFlag={false}
            postPage
            commentsFlag
          />
        ))}
      </StyledWrapper>
    );
  }
}

const StyledWrapper = styled(PageWrapper)``;

PostPageContainer.propTypes = {
  selectedPost: PropTypes.array,
  validPostUrlSlug: PropTypes.bool.isRequired,
  getComments: PropTypes.func.isRequired,
};

PostPageContainer.defaultProps = {
  selectedPost: [],
};

const mapStateToProps = (state, ownProps) => ({
  selectedPost: selectPostByPostId(state, ownProps.match.params.postId),
  validPostUrlSlug: validPostUrl(
    state,
    ownProps.match.params.categoryUrl,
    ownProps.match.params.postId,
    ownProps.match.params.postSlug
  ),
});

const mapDispatchToProps = dispatch => ({
  getComments: payload => dispatch(fetchComments(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer);
