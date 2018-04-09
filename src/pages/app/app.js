import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home/home.container';

import { Wrap } from './app.styled';

const App = () => (
  <Wrap>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Wrap>
);

export default App;
