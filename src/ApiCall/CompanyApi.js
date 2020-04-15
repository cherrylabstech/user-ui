import * as actionTypes from "../actions/LocationActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getCompany = CompanyData => {
  return {
    type: actionTypes.GET_COMPANY_DATA
  };
};
export const setCompany = CompanyData => {
  return {
    type: actionTypes.SET_COMPANY_DATA,
    CompanyData: CompanyData
  };
};
export const CompanyFail = error => {
  return {
    type: actionTypes.COMPANY_DATA_FAIL,
    error: error
  };
};

export const CompanyApi = location => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/companies/?query=&?location=${location ||
    10}`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getCompany());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setCompany(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispatch(CompanyFail(error.response.data));
      });
  };
};
