import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryPageContainer from './CategoryPageContainer';
import PostPageContainer from './PostPageContainer';

const CategoryRoutingContainer = () => (
  <Switch>
    <Route exact path="/:category" component={CategoryPageContainer} />
    <Route path="/:category/:post" component={PostPageContainer} />
  </Switch>
);

export default CategoryRoutingContainer;
