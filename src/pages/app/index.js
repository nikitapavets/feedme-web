import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home';

import { Wrap } from './index.styled';

const App = () => (
  <Wrap>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Wrap>
);

export default App;
