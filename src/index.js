import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import { menuReducer, cartReducer, authReducer } from "./store/reducers/";

import thunk from "redux-thunk";

import { MuiThemeProvider } from "@material-ui/core/styles/MuiThemeProvider";

import { createMuiTheme } from "@material-ui/core/styles";

import { BrowserRouter } from "react-router-dom";

import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

import CartTest from "./cartTest";

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  auth: authReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <MuiThemeProvider theme={theme}> */}
      {/* <App /> */}

      <CartTest />

      {/* </MuiThemeProvider> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
