import * as actionTypes from "../actions/LocationActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getUser = UserData => {
  return {
    type: actionTypes.GET_USER_DATA
  };
};
export const setUser = UserData => {
  return {
    type: actionTypes.SET_USER_DATA,
    UserData: UserData
  };
};
export const userFail = error => {
  return {
    type: actionTypes.USER_DATA_FAIL,
    error: error
  };
};

export const UserApi = (location, company) => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/clients/?location=${location ||
    10}&company=${company || 10}`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getUser());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setUser(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined && dispatch(userFail(error.response.data));
      });
  };
};
