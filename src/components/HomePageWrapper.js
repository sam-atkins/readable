import React from 'react';
import Header from './Header';
import CategoryPostViewContainer from '../containers/CategoryPostViewContainer';
import SideBar from './SideBar';
import PageWrapper from '../styles/pagewrapper';

const HomePageWrapper = () => (
  <PageWrapper>
    <Header />
    <CategoryPostViewContainer />
    <SideBar />
  </PageWrapper>
);

export default HomePageWrapper;
