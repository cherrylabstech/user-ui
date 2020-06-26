import * as actionTypes from "../actions/propertiesActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getProperties = () => {
  return {
    type: actionTypes.GET_PROPERTIES_DATA
  };
};
export const setProperties = propertiesData => {
  return {
    type: actionTypes.SET_PROPERTIES_DATA,
    propertiesData: propertiesData
  };
};
export const PropertiesFail = error => {
  return {
    type: actionTypes.PROPERTIES_DATA_FAIL,
    error: error
  };
};

export const PropertiesApi = () => {
  const url = `${BASE_PATH}${SERVICE_PATH}/static/properties`;
  return dispatch => {
    const apiToken = localStorage.getItem("X-Auth-Token");
    const token =
      apiToken !== null ? { headers: { "X-Auth-Token": apiToken } } : ``;
    dispatch(getProperties());
    axios
      .get(url, token)
      .then(res => {
        dispatch(setProperties(res.data));
      })
      .catch(error => {
        console.log(error.response);
        error.response !== undefined &&
          dispatch(PropertiesFail(error.response.data));
      });
  };
};
