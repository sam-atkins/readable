import React from 'react';
import PropTypes from 'prop-types';
import NewPostButton from '../NewPostButton';
import Footer from '../Footer';
import { SideBarMessageWrapper, SideBarText } from './SideBar.styles';

const SideBar = props => (
  <SideBarMessageWrapper>
    <SideBarText>
      readable: a reddit clone built with React and Redux.
    </SideBarText>
    <Footer />
    {!props.postForm && <NewPostButton />}
  </SideBarMessageWrapper>
);

SideBar.propTypes = {
  postForm: PropTypes.bool,
};

SideBar.defaultProps = {
  postForm: false,
};

export default SideBar;
