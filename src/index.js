import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ArticlesShow from './components/articles/ArticlesShow';
import ArticlesIndex from './components/articles/ArticlesIndex';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/articles/:id" component={ArticlesShow} />
        <Route path="/" component={ArticlesIndex} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
