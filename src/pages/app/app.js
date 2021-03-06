import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Modal from '../../_components/Modal/Modal.container';

import Home from '../home/home.container';
import Subreddit from '../subreddit/subreddit.container';
import Post from '../post/post.container';

import lang from '../../lang/en';

import { Wrap, Header, Title, Content } from './app.styled';

const App = ({ modals, modalClose }) => (
  <Wrap>
    <Header>
      <Title to="/">{lang.general.siteTitle}</Title>
    </Header>
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/subreddits/:subredditName" component={Subreddit} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/subreddits/:subredditName/posts/:postName"
          component={Post}
        />
      </Switch>
    </Content>
    {modals.isOpen && <Modal onClose={modalClose} {...modals} />}
  </Wrap>
);

export default App;
