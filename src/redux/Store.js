import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';

import rootReducer from './RootReducer';

const middlewares = [thunk];




const config = process.env.NODE_ENV === 'development' ? composeWithDevTools(
    applyMiddleware(...middlewares)    
) : applyMiddleware(...middlewares);

export const store = createStore(rootReducer, config);

export const persistor = persistStore(store);
