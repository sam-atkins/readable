import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../actions/categoryActions';
import { fetchPosts } from '../actions/postActions';
import { getCategoryValues } from '../utils/selectors';
import App from './App';
import CategoryPostViewContainer from './CategoryPostViewContainer';
import PostPageContainer from './PostPageContainer';

class Root extends Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
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
              return (
                <Route path={routePath} component={CategoryPostViewContainer} />
              );
            })}
          <Route path="/post" component={PostPageContainer} />
        </div>
      </Router>
    );
  }
}

Root.propTypes = {
  category: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  getCategories: PropTypes.func.isRequired,
  // post: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  // getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: getCategoryValues(state),
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
