import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import CategoryContainer from './CategoryContainer';
import PostContainer from './PostContainer';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/category" component={CategoryContainer} />
      <Route path="/post" component={PostContainer} />
    </div>
  </Router>
);

export default Root;
