import * as actionTypes from "../actions/propertiesActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getRequestCategory = () => {
  return {
    type: actionTypes.GET_PROPERTIES_DATA
  };
};
export const setRequestCategory = propertiesData => {
  return {
    type: actionTypes.SET_PROPERTIES_DATA,
    propertiesData: propertiesData
  };
};
export const RequestCategoryFail = error => {
  return {
    type: actionTypes.PROPERTIES_DATA_FAIL,
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
