import * as actionTypes from "../actions/DashBoardActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getDashBoardData = DashBoardData => {
  return {
    type: actionTypes.GET_DASHBOARD_DATA
  };
};
export const setDashBoardData = DashBoardData => {
  return {
    type: actionTypes.SET_DASHBOARD_DATA,
    DashBoardData: DashBoardData
  };
};
export const DashBoardDataFail = error => {
  return {
    type: actionTypes.DASHBOARD_DATA_FAIL,
    error: error
  };
};

export const DashBoardApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/dashboard/1`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getDashBoardData());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setDashBoardData(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(DashBoardDataFail(error.response.data));
      });
  };
};
