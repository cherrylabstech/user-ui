import * as actionTypes from "../actions/PriorityActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getPriorityData = PriorityData => {
  return {
    type: actionTypes.GET_PRIORITY_DATA
  };
};
export const setPriorityData = PriorityData => {
  return {
    type: actionTypes.SET_PRIORITY_DATA,
    PriorityData: PriorityData
  };
};
export const PriorityDataFail = error => {
  return {
    type: actionTypes.PRIORITY_DATA_FAIL,
    error: error
  };
};

export const PriorityApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/priority`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getPriorityData());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setPriorityData(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(PriorityDataFail(error.response.data));
      });
  };
};
