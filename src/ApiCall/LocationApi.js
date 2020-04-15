import * as actionTypes from "../actions/LocationActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getLocation = LocationData => {
  return {
    type: actionTypes.GET_LOCATION_DATA
  };
};
export const setLocation = LocationData => {
  return {
    type: actionTypes.SET_LOCATION_DATA,
    LocationData: LocationData
  };
};
export const locationFail = error => {
  return {
    type: actionTypes.LOCATION_DATA_FAIL,
    error: error
  };
};

export const LocationApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/location`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getLocation());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setLocation(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispatch(locationFail(error.response.data));
      });
  };
};
