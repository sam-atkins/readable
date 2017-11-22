import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../styles/pagewrapper';

const CategoryPageContainer = ({ match }) => (
  <StyledWrapper>
    <Header />
    <NavBar />
    <div>This is the category page for: {match.params.category}</div>
    <Footer />
  </StyledWrapper>
);

CategoryPageContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

const StyledWrapper = styled(PageWrapper)``;

export default CategoryPageContainer;
