//TicketDetailStateData

import * as actionTypes from "../actions/TicketDetailsAction";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getTicketDetailState = TicketDetailStateData => {
  return {
    type: actionTypes.GET_TICKET_DETAIL_STATE_DATA
  };
};
export const setTicketDetailState = TicketDetailStateData => {
  return {
    type: actionTypes.SET_TICKET_DETAIL_STATE_DATA,
    TicketDetailStateData: TicketDetailStateData
  };
};
export const TicketDetailStateFail = error => {
  return {
    type: actionTypes.TICKET_DETAIL_STATE_DATA_FAIL,
    error: error
  };
};

export const TicketDetailStateApi = id => {
  const token = localStorage.getItem("X-Auth-Token");
  const ticketId = id ? `/1/${id}` : ``;
  const url = `${BASE_PATH}${SERVICE_PATH}/states${ticketId}`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getTicketDetailState());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setTicketDetailState(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(TicketDetailStateFail(error.response.data));
      });
  };
};
