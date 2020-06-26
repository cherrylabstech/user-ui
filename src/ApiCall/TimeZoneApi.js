import * as actionTypes from "../actions/timeZoneActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getTimeZone = () => {
  return {
    type: actionTypes.GET_TIMEZONE_DATA
  };
};
export const setTimeZone = TimeZoneData => {
  return {
    type: actionTypes.SET_TIMEZONE_DATA,
    TimeZoneData: TimeZoneData
  };
};
export const timeZoneFail = error => {
  return {
    type: actionTypes.TIMEZONE_DATA_FAIL,
    error: error
  };
};

export const TimeZoneApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/timezone`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispatch(getTimeZone());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setTimeZone(res.data));
      })
      .catch(error => {
        error.response !== undefined &&
          dispatch(timeZoneFail(error.response.data));
      });
  };
};
