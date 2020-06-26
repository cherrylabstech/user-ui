import * as actionTypes from "../actions/RequestCategoryActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getRequestCategory = requestCategoryData => {
  return {
    type: actionTypes.GET_REQUEST_CATEGORY_DATA
  };
};
export const setRequestCategory = requestCategoryData => {
  return {
    type: actionTypes.SET_REQUEST_CATEGORY_DATA,
    requestCategoryData: requestCategoryData
  };
};
export const RequestCategoryFail = error => {
  return {
    type: actionTypes.REQUEST_CATEGORY_FAIL,
    error: error
  };
};

export const requestCategoryApi = () => {
  const url = `${BASE_PATH}${SERVICE_PATH}/category/3`;
  return dispatch => {
    const apiToken = localStorage.getItem("X-Auth-Token");
    const token =
      apiToken !== null ? { headers: { "X-Auth-Token": apiToken } } : ``;
    dispatch(getRequestCategory());
    axios
      .get(url, token)
      .then(res => {
        dispatch(setRequestCategory(res.data));
      })
      .catch(error => {
        console.log(error.response);
        error.response !== undefined &&
          dispatch(RequestCategoryFail(error.response.data));
      });
  };
};
