import * as ActionTypes from "../actions/EditProfilePost";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import { userActions } from "./rootApi";

export const getEditProfile = editProfileData => {
  return {
    type: ActionTypes.GET_EDIT_PROFILE_DATA
  };
};
export const setEditProfile = editProfileData => {
  return {
    type: ActionTypes.SET_EDIT_PROFILE_DATA,
    editProfileData: editProfileData
  };
};
export const editProfileFail = error => {
  return {
    type: ActionTypes.EDIT_PROFILE_FAIL,
    error: error
  };
};

export const editProfileApi = editProfileData => {
  const url = `${BASE_PATH}${SERVICE_PATH}/profile`;
  const token = localStorage.getItem("X-Auth-Token");
  const apiToken = token !== null && { "X-Auth-Token": token };
  return dispatch => {
    dispatch(getEditProfile());
    axios
      .post(url, editProfileData, { headers: apiToken })
      .then(res => {
        dispatch(setEditProfile(res.data));
        dispatch(userActions.profileDetailsApi());
      })
      .catch(error => {
        error.response !== undefined &&
          dispatch(editProfileFail(error.response.data));
      });
  };
};
