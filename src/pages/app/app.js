import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home/home.container';
import Subreddit from '../subreddit/subreddit.container';

import lang from '../../lang/en';

import { Wrap, Header, Title, Content } from './app.styled';

const App = () => (
  <Wrap>
    <Header>
      <Title>{lang.general.siteTitle}</Title>
    </Header>
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/subreddits/:name" component={Subreddit} />
      </Switch>
    </Content>
  </Wrap>
);

export default App;
