import * as actionTypes from "../actions/PlanActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getPlanData = PlanData => {
  return {
    type: actionTypes.GET_PLAN_DATA
  };
};
export const setPlanData = PlanData => {
  return {
    type: actionTypes.SET_PLAN_DATA,
    PlanData: PlanData
  };
};
export const PlanDataFail = error => {
  return {
    type: actionTypes.PLAN_DATA_FAIL,
    error: error
  };
};

export const PlanApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/plans`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getPlanData());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setPlanData(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(PlanDataFail(error.response.data));
      });
  };
};
