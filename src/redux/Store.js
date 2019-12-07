import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import rootReducer from './RootReducer';

const middlewares = [thunk];




const config = process.env.NODE_ENV === 'development' ? composeWithDevTools(
    applyMiddleware(...middlewares)    
) : applyMiddleware(...middlewares);

const store = createStore(rootReducer, config);

export default store;