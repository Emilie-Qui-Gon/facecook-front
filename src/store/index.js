import { createStore, applyMiddleware, compose } from 'redux';
import userApiMiddleware from 'src/middlewares/userApi';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on branche notre middleware sur le store
  applyMiddleware(userApiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
