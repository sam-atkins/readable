import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
} from '../utils/selectors';
import Loading from '../components/Loading';
import Error from '../components/Error';

const NavBarContainer = ({ categories, categoryError, categoryLoading }) => {
  if (categoryLoading) {
    return <Loading />;
  }

  if (categoryError) {
    return <Error />;
  }

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {categories.map(category => (
        <li>
          <Link to={`${category.path}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
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
