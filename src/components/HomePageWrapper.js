import React from 'react';
import Header from './Header';
import CategoryPostViewContainer from '../containers/CategoryPostViewContainer';
import Footer from './Footer';
import SideBar from './SideBar';
import PageWrapper from '../styles/pagewrapper';

const HomePageWrapper = () => (
  <PageWrapper>
    <Header />
    <CategoryPostViewContainer />
    <SideBar />
    <Footer />
  </PageWrapper>
);

export default HomePageWrapper;
