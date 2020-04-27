import * as actionTypes from "../actions/TicketListActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import { Pagination } from "../helpers/Pagination";
import queryString from "query-string";
export const getTicketList = TicketList => {
  return {
    type: actionTypes.GET_TICKET_LIST
  };
};
export const setTicketList = TicketList => {
  return {
    type: actionTypes.SET_TICKET_LIST,
    TicketList: TicketList
  };
};
export const TicketListFail = error => {
  return {
    type: actionTypes.TICKET_LIST_FAIL,
    error: error
  };
};

export const TicketListApi = (location, value) => {
  const Page = Pagination(location, value);
  const query = queryString.parse(location);
  const from = Page.from;
  const to = Page.to;
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/requests/1?state=${
    query.state
  }&from=${from || 0}&to=${to ||
    10}&originated=false&order=desc&sortBy=UPDATE-TIME`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getTicketList());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setTicketList(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(TicketListFail(error.response.data));
      });
  };
};

export const TicketListRefreshApi = (location, value) => {
  const Page = Pagination(location, value);
  const query = queryString.parse(location);
  const from = Page.from;
  const to = Page.to;
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/requests/1?state=${
    query.state
  }&from=${from || 0}&to=${to ||
    10}&originated=false&order=desc&sortBy=UPDATE-TIME`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setTicketList(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(TicketListFail(error.response.data));
      });
  };
};
