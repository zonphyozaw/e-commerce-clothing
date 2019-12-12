import { combineReducers } from 'redux';


import UserReducer from './user/UserReducer';
import CartReducer from './cart/CartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart','shop']
}


const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer);