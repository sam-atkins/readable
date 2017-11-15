import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../actions/categoryActions';
import App from './App';
import CategoryViewContainer from './CategoryViewContainer';
import PostContainer from './PostContainer';

class Root extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { category } = this.props.category;
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          {category &&
            category.map((c) => {
              const routePath = `path="/${c.path}"`;
              return <Route path={routePath} component={CategoryViewContainer} />;
            })}
          <Route path="/post" component={PostContainer} />
        </div>
      </Router>
    );
  }
}

Root.propTypes = {
  category: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
