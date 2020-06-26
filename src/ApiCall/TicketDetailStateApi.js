//TicketDetailStateData

import * as actionTypes from "../actions/TicketDetailsAction";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import { userActions } from "./rootApi";
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
export const getTicketDetailPostState = TicketDetailPostStateData => {
  return {
    type: actionTypes.GET_TICKET_DETAIL_POST_STATE_DATA
  };
};
export const setTicketDetailPosState = TicketDetailPostStateData => {
  return {
    type: actionTypes.SET_TICKET_DETAIL_POST_STATE_DATA,
    TicketDetailPostStateData: TicketDetailPostStateData
  };
};
export const TicketDetailPostStateFail = error => {
  return {
    type: actionTypes.TICKET_DETAIL_POST_STATE_DATA_FAIL,
    error: error
  };
};

export const TicketDetailStatePostApi = ({ stateData, location }) => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/states/`;
  return dispatch => {
    dispatch(getTicketDetailPostState());
    const apiToken = token !== null && { "X-Auth-Token": token };
    let ticketApi = () => {
      dispatch(userActions.TicketListApi(location.search));
      dispatch(userActions.TicketCountApi(location.search));
      dispatch(userActions.DashBoardApi());
    };
    axios
      .post(url, stateData, { headers: apiToken })
      .then(res => {
        location.location === "/ticket" && ticketApi();
        dispatch(setTicketDetailPosState());
      })
      .catch(error => {
        error.response && console.log(error.response);
        dispatch(TicketDetailPostStateFail(error));
        error.response !== undefined && alert(error.response.data.message);
      });
  };
};
