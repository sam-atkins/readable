import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBarContainer from './NavBarContainer';
import Header from '../components/Header';
import PostView from '../components/PostView';
import NoMatchWrapper from '../components/NoMatchWrapper';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import PageWrapper from '../styles/pagewrapper';
import { selectPostByPostId, validPostUrl } from '../selectors/postSelectors';

const PostPageContainer = ({ selectedPost, validPostUrlSlug }) => {
  if (!validPostUrlSlug) {
    return <NoMatchWrapper />;
  }

  if (selectedPost.deleted === true) {
    return <NoMatchWrapper />;
  }

  return (
    <StyledWrapper>
      <Header />
      <NavBarContainer />
      <SideBar />
      {selectedPost.map(post => (
        <PostView key={post.id} post={post} homeFlag={false} postPage />
      ))}
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled(PageWrapper)``;

PostPageContainer.propTypes = {
  selectedPost: PropTypes.array,
  validPostUrlSlug: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps)(PostPageContainer);
