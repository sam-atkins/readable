import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

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

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, [col] 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(200px, auto);
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export default CategoryPageContainer;
