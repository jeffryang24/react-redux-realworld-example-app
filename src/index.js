import store from './store';

import App from './components/App';
import Login from './components/Login';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

// root Element
const rootElement = document.getElementById('root');

// Bump to DOM
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>
), rootElement);
