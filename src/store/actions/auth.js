import * as actionTypes from "./actionTypes";

import axios from "axios";
require("dotenv/config");

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (idToken, localId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: localId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

// isSignUp false ==> SignIn functionality
export const auth = (email, password, isSignUp) => {
  return dispatch => {
    console.log(process.env.REACT_APP_FIREBASE_API_KEY);
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
      process.env.REACT_APP_FIREBASE_API_KEY;
    if (!isSignUp)
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
        process.env.REACT_APP_FIREBASE_API_KEY;

    axios
      .post(url, authData)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(authTimeout(response.data.expiresIn));
      })
      .catch(error => {
        // console.log(error.response);
        dispatch(authFail(error.response.data.error.message));
      });
  };
};

export const authTimeout = timeout => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, timeout * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const validUserAlreadyLoggedIn = () => {
  return dispatch => {
    const url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=" +
      process.env.REACT_APP_FIREBASE_API_KEY;
    const localStoredIdToken = localStorage.getItem("token");
    if (!localStoredIdToken) dispatch(logout());

    const requestBodyPayload = {
      idToken: localStoredIdToken
    };

    axios
      .post(url, requestBodyPayload)
      .then(response => {
        const userId = (response.data.idToken = localStorage.setItem(
          "userId",
          response.data.users[0].localId
        ));
        dispatch(authSuccess(localStoredIdToken, userId));
      })
      .catch(err => {
        dispatch(logout());
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate > new Date()) {
        const userId = localStorage.getItem("userId");

        dispatch(authSuccess(token, userId));
        dispatch(
          authTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      } else {
        dispatch(logout());
      }
    }
  };
};
