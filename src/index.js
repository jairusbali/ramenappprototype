import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import {
  menuReducer,
  cartReducer,
  authReducer,
  ordersReducer
} from "./store/reducers/";

import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom";

import CartTest from "./cartTest";

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  auth: authReducer,
  orders: ordersReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
