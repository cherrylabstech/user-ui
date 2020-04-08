import * as ActionTypes from "../actions/authActions";
import axios from "axios";
import { history } from "../helpers/history";
export const authStart = authData => {
  return {
    type: ActionTypes.AUTH_START
  };
};
export const authSuccess = authData => {
  return {
    type: ActionTypes.AUTH_SUCCESS,
    authData: authData
  };
};
export const authFail = error => {
  return {
    type: ActionTypes.AUTH_FAIL,
    error: error
  };
};
export const userActions = {
  auth
};

function auth(email, password) {
  const url =
    "https://agentui.asista.in/Oauth/rest/client/auth?domain=agentui.asista.in";

  const headers = {
    "Content-Type": "application/json",
    "device-type": "web"
  };
  const credentials = {
    username: email.username,
    password: email.password
  };
  return dispatch => {
    dispatch(authStart());
    axios
      .post(url, credentials, { headers: headers })
      .then(res => {
        dispatch(authSuccess(email, password));
        localStorage.setItem("X-Auth-Token", res.data.access_token);
        localStorage.setItem("refresh-token", res.data.refresh_token);
        history.push("/home");
        window.location.reload();
      })
      .catch(error => {
        dispatch(authFail(error.response.data));
        console.log(error.response);
        error.response.status === 457 &&
          alert("You entered wrong username and password");
      });
  };
}