import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from './middleware';

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

// applyMiddleware
const middleware = applyMiddleware(promiseMiddleware);

// create store
const store = createStore(reducer, middleware);

export default store;
