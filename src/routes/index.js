import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import PostPage from '../pages/PostPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:id" component={PostPage} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}
