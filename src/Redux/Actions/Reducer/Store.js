import {createStore , combineReducers, applyMiddleware, compose} from 'redux';
import {productListReducer,productDetailsReducer,productSaveReducer,productDeleteReducer,productReviewSaveReducer} from './Productreducer';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk'
import { cartReducer } from './CartReducer';
import {userSigninReducer, userRegisterReducer } from './userReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer = combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    
})
// const cartItems = Cookie.getJSON("cartItems") || [];
// const initialState = {cart:{cartItems}}
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const reduxtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(persistedReducer,reduxtool(applyMiddleware(thunk)))

export const persister = persistStore(store)
