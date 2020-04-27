import * as actionTypes from "../actions/PasswordActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getPassword = PasswordData => {
  return {
    type: actionTypes.GET_PASSWORD_DATA
  };
};
export const setPassword = PasswordData => {
  return {
    type: actionTypes.SET_PASSWORD_DATA,
    PasswordData: PasswordData
  };
};
export const passwordFail = error => {
  return {
    type: actionTypes.PASSWORD_DATA_FAIL,
    error: error
  };
};

export const PasswordApi = passwordData => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/profile/password`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getPassword());
    axios
      .post(url, passwordData, { headers: apiToken })
      .then(res => {
        dispatch(setPassword(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispatch(passwordFail(error.response.data));
      });
  };
};
