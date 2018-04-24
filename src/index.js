import App from './components/App';

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { promiseMiddleware } from './middleware';

// root Element
const rootElement = document.getElementById('root');

// default state
const defaultState = {
  appName: 'conduit',
  articles: null
};

// create reducer function
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return {
        ...state,
        articles: action.payload.articles
      }

    default:
      return state;
  }
};

// create store
const store = createStore(reducer, applyMiddleware(promiseMiddleware));

// Bump to DOM
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), rootElement);
