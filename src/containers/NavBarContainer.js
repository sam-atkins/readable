import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
} from '../selectors/categorySelectors';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { NAV_ANCHOR } from '../styles/colours';

const NavBarContainer = ({ categories, categoryError, categoryLoading }) => {
  if (categoryLoading) {
    return <Loading />;
  }

  if (categoryError) {
    return <Error />;
  }

  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavAnchor to="/">home</NavAnchor>
        </NavItem>
        {categories.map(category => (
          <NavItem key={category.id}>
            <NavAnchor to={`/${category.path}`}>{category.name}</NavAnchor>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};

NavBarContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryLoading: PropTypes.bool.isRequired,
  categoryError: PropTypes.bool.isRequired,
};

const NavWrapper = styled.div`
  grid-column: col 1 / span 3;
  grid-row: 1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  max-width: 100%;
  padding: 0;
`;

const NavItem = styled.li`
  box-sizing: border-box;
  display: flex;
  display: inline-block;
  flex: 1;
  line-height: 24px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 20%;
`;

const NavAnchor = styled(Link)`
  color: ${NAV_ANCHOR};
  text-decoration: none;
`;

const mapStateToProps = state => ({
  categories: getCategoryValues(state),
  categoryError: getCategoryErrorStatus(state),
  categoryLoading: getCategoryLoadingStatus(state),
});

export default connect(mapStateToProps)(NavBarContainer);
