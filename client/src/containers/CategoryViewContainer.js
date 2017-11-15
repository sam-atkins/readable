import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryView from '../components/CategoryView';

const CategoryViewContainer = (props) => {
  if (props.category.length > 0) {
    return props.category.map(c => (
      <CategoryView category={c} key={c.name} />
    ));
  }

  return <div>Loading...</div>;
};

CategoryViewContainer.propTypes = {
  category: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const mapStateToProps = state => ({
  category: state.category,
});

export default connect(mapStateToProps)(CategoryViewContainer);
