import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import PostPage from '../pages/PostPage';
import Contact from '../pages/Contact/Contact';

import Page404 from '../pages/Page404/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:id" component={PostPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />

      <Route path="*" component={Page404} />
    </Switch>
  );
}
