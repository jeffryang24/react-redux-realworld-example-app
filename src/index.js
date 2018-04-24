import store from './store';

import App from './components/App';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// root Element
const rootElement = document.getElementById('root');

// Bump to DOM
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
), rootElement);
