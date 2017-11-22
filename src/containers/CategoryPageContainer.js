import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBarContainer from './NavBarContainer';
import Footer from '../components/Footer';
import PageWrapper from '../styles/pagewrapper';

const CategoryPageContainer = ({ match }) => (
  <StyledWrapper>
    <Header />
    <NavBarContainer />
    <div>This is the category page for: {match.params.category}</div>
    <Footer />
  </StyledWrapper>
);

CategoryPageContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

const StyledWrapper = styled(PageWrapper)``;

export default CategoryPageContainer;
