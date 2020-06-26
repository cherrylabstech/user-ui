import * as ActionTypes from "../actions/CreateTicket";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";

export const getCreateForm = createFormData => {
  return {
    type: ActionTypes.GET_CREATE_FORM
  };
};
export const setCreateForm = createFormData => {
  return {
    type: ActionTypes.SET_CREATE_FORM,
    createFormData: createFormData
  };
};
export const createFormFail = error => {
  return {
    type: ActionTypes.CREATE_FORM_FAIL,
    error: error
  };
};

export const CreateTicketApi = role => {
  const url = `${BASE_PATH}${SERVICE_PATH}/requests/createForm?role=${role}`;
  const token = localStorage.getItem("X-Auth-Token");
  const apiToken = token !== null && { "X-Auth-Token": token };
  return dispacth => {
    dispacth(getCreateForm());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setCreateForm(res.data));
      })
      .catch(error => {
        error.response !== undefined &&
          dispacth(createFormFail(error.response.data));
      });
  };
};
