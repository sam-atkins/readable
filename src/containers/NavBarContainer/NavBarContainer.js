import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
} from '../../selectors/categorySelectors';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {
  NavAnchor,
  NavItem,
  NavList,
  NavWrapper,
  SpanSeparator,
} from './NavBarContainer.styles';

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
          <NavAnchor to="/" activeClassName="active" exact strict>
            home
          </NavAnchor>
        </NavItem>
        {categories.map(category => (
          <NavItem key={category.id}>
            <SpanSeparator>-</SpanSeparator>
            <NavAnchor
              to={`/${category.path}`}
              activeClassName="active"
              exact
              strict
            >
              {category.name}
            </NavAnchor>
          </NavItem>
        ))}
        <SpanSeparator>|</SpanSeparator>
      </NavList>
    </NavWrapper>
  );
};

NavBarContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryLoading: PropTypes.bool.isRequired,
  categoryError: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  categories: getCategoryValues(state),
  categoryError: getCategoryErrorStatus(state),
  categoryLoading: getCategoryLoadingStatus(state),
});

export default connect(mapStateToProps)(NavBarContainer);
