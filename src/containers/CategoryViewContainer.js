import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryView from '../components/CategoryView';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {
  getCategoryValues,
  getCategoryErrorStatus,
  getCategoryLoadingStatus,
} from '../utils/selectors';

const CategoryViewContainer = ({ category, error, loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return category.map(c => <CategoryView category={c} key={c.name} />);
};

CategoryViewContainer.propTypes = {
  category: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  category: getCategoryValues(state),
  error: getCategoryErrorStatus(state),
  loading: getCategoryLoadingStatus(state),
});

export default connect(mapStateToProps)(CategoryViewContainer);
