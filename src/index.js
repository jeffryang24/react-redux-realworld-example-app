import App from './components/App';

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// root Element
const rootElement = document.getElementById('root');

// default state
const defaultState = {
  appName: 'conduit',
  articles: null
};

// create reducer function
const reducer = (state = defaultState, action) => {
  return state;
};

// create store
const store = createStore(reducer);

// Bump to DOM
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), rootElement);
