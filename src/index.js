import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import thunk from 'redux-thunk';

import WebFont from 'webfontloader';

import reducers from './reducers';
import routes from './routes';

WebFont.load({
  google: {
    families: ['Poor Story:400', 'sans-serif']
  }
});

const preloadedState = window.PRELOADED_STATE;
const store = createStore(
  reducers,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
