///profile/details/?v2=true

//https://m1.asista.com/servicedesk/api/v1/theme/?v2=true

import * as actionTypes from "../actions/ProfileActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import { token } from "../helpers/token";
export const getProfile = profileDetailsData => {
  return {
    type: actionTypes.GET_PROFILE_DATA
  };
};
export const setProfile = profileDetailsData => {
  return {
    type: actionTypes.SET_PROFILE_DATA,
    profileDetailsData: profileDetailsData
  };
};
export const profileFail = error => {
  return {
    type: actionTypes.PROFILE_FAIL,
    error: error
  };
};

export const profileApi = () => {
  const url = `${BASE_PATH}${SERVICE_PATH}/profile`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispacth(getProfile());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setProfile(res.data));
      })
      .catch(error => {
        dispacth(profileFail(error.response.data));
      });
  };
};
