///profile/details/?v2=true

//https://m1.asista.com/servicedesk/api/v1/theme/?v2=true

import * as actionTypes from "../actions/ProfileDetailsAction";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getProfileDetails = profileDetailsData => {
  return {
    type: actionTypes.GET_PROFILE_DETAILS_DATA
  };
};
export const setProfileDetails = profileDetailsData => {
  return {
    type: actionTypes.SET_PROFILE_DETAILS_DATA,
    profileDetailsData: profileDetailsData
  };
};
export const profileDetailsFail = error => {
  return {
    type: actionTypes.PROFILE_DETAILS_FAIL,
    error: error
  };
};

export const profileDetailsApi = () => {
  const url = `${BASE_PATH}${SERVICE_PATH}/profile/details/?v2=true`;
  return dispacth => {
    const token = { "X-Auth-Token": localStorage.getItem("X-Auth-Token") };
    dispacth(getProfileDetails());
    axios
      .get(url, { headers: token })
      .then(res => {
        dispacth(setProfileDetails(res.data));
      })
      .catch(error => {
        console.log(error.response);
        error.response !== undefined &&
          dispacth(profileDetailsFail(error.response.data));
      });
  };
};
