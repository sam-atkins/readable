import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryPageContainer from './CategoryPageContainer';
import PostPageContainer from './PostPageContainer';

const CategoryRoutingContainer = () => (
  <Switch>
    <Route exact path="/:categoryUrl" component={CategoryPageContainer} />
    <Route
      path="/:categoryUrl/:postId/:postSlug"
      component={PostPageContainer}
    />
  </Switch>
);

export default CategoryRoutingContainer;
