import React from 'react';
import Header from './Header';
import RootPageContainer from '../containers/RootPageContainer';
import SideBar from './SideBar';
import { PageWrapper } from '../styles/pagewrapper';

const HomePageWrapper = () => (
  <PageWrapper>
    <Header />
    <RootPageContainer />
    <SideBar />
  </PageWrapper>
);

export default HomePageWrapper;
