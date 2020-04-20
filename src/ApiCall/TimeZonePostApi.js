import * as actionTypes from "../actions/timeZonePostActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getTimePostZone = () => {
  return {
    type: actionTypes.GET_TIMEZONE_POST_DATA
  };
};
export const setTimePostZone = TimeZoneData => {
  return {
    type: actionTypes.SET_TIMEZONE_POST_DATA,
    TimeZoneData: TimeZoneData
  };
};
export const timeZonePostFail = error => {
  return {
    type: actionTypes.TIMEZONE_POST_DATA_FAIL,
    error: error
  };
};

export const TimeZonePostApi = timeZoneData => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/timezone`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispatch(getTimePostZone());
    axios
      .post(url, timeZoneData, { headers: apiToken })
      .then(res => {
        dispatch(setTimePostZone(res.data));
      })
      .catch(error => {
        error.response !== undefined &&
          dispatch(timeZonePostFail(error.response.data));
      });
  };
};
