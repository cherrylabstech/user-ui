import * as actionTypes from "../actions/TicketCountActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import queryString from "query-string";
export const getTicketCount = TicketCount => {
  return {
    type: actionTypes.GET_TICKET_COUNT
  };
};
export const setTicketCount = TicketCount => {
  return {
    type: actionTypes.SET_TICKET_COUNT,
    TicketCount: TicketCount
  };
};
export const TicketCountFail = error => {
  return {
    type: actionTypes.TICKET_COUNT_FAIL,
    error: error
  };
};

export const TicketCountApi = location => {
  const query = queryString.parse(location);
  const state = query.state || -1;
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/requests/1/count/?state=${state}&originated=false`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getTicketCount());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setTicketCount(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(TicketCountFail(error.response.data));
      });
  };
};
