import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import Main from './reducers/reducer_main';

const middleware = applyMiddleware(reduxPromise, reduxThunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be defined here
    main: Main
  })
  return createStore(rootReducer, data, middleware)
}