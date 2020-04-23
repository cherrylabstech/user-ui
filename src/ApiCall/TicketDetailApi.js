import * as actionTypes from "../actions/TicketDetailsAction";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getTicketDetail = TicketDetailData => {
  return {
    type: actionTypes.GET_TICKET_DETAIL_DATA
  };
};
export const setTicketDetail = TicketDetailData => {
  return {
    type: actionTypes.SET_TICKET_DETAIL_DATA,
    TicketDetailData: TicketDetailData
  };
};
export const TicketDetailFail = error => {
  return {
    type: actionTypes.TICKET_DETAIL_DATA_FAIL,
    error: error
  };
};

export const TicketDetailApi = id => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/requests/1/${id}?v2=true`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getTicketDetail());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setTicketDetail(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(TicketDetailFail(error.response.data));
      });
  };
};
