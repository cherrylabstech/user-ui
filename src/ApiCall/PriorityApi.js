import * as actionTypes from "../actions/PriorityActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import { userActions } from "./rootApi";
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
export const getPriorityPost = () => {
  return {
    type: actionTypes.GET_POST_PRIORITY_DATA
  };
};
export const setPriorityPost = () => {
  return {
    type: actionTypes.SET_POST_PRIORITY_DATA
  };
};
export const PriorityPostFail = error => {
  return {
    type: actionTypes.POST_PRIORITY_DATA_FAIL,
    error: error
  };
};

export const PriorityPostApi = value => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/priority/1`;
  const postData = {
    priorityId: value.priorityId,
    requestId: value.ticketId
  };
  return dispatch => {
    dispatch(getPriorityPost());
    const apiToken = token !== null && { "X-Auth-Token": token };
    axios
      .post(url, postData, { headers: apiToken })
      .then(res => {
        value.pathname === "/ticket" &&
          dispatch(userActions.TicketListApi(value.location));

        dispatch(setPriorityPost());
      })
      .catch(error => {
        console.log(error.response);
        dispatch(userActions.TicketListRefreshApi(value.location));
        error.response !== undefined && alert(error.response.data.message);
        error.response !== undefined &&
          dispatch(PriorityPostFail(error.response));
      });
  };
};
