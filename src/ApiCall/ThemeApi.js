//https://m1.asista.com/servicedesk/api/v1/theme/?v2=true

import * as actionTypes from "../actions/ThemeActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getTheme = themeData => {
  return {
    type: actionTypes.GET_THEME_DATA
  };
};
export const setTheme = themeData => {
  return {
    type: actionTypes.SET_THEME_DATA,
    themeData: themeData
  };
};
export const themeFail = error => {
  return {
    type: actionTypes.THEME_DATA_FAIL,
    error: error
  };
};

export const themeApi = () => {
  const url = `${BASE_PATH}${SERVICE_PATH}/theme/?v2=true`;
  return dispacth => {
    dispacth(getTheme());
    axios
      .get(url)
      .then(res => {
        dispacth(setTheme(res.data));
      })
      .catch(error => {
        dispacth(themeFail(error.response.data));
      });
  };
};
