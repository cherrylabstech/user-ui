import * as actionTypes from "../actions/ProfilePicUploadActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import { userActions } from "./rootApi";
export const getProfilePictureUpload = () => {
  return {
    type: actionTypes.GET_PROFILE_PICTURE_DATA
  };
};
export const setProfilePictureUpload = profilePictureUploadData => {
  return {
    type: actionTypes.SET_PROFILE_PICTURE_DATA,
    profilePictureUploadData: profilePictureUploadData
  };
};
export const profilePictureFail = error => {
  return {
    type: actionTypes.PROFILE_PICTURE_DATA_FAIL,
    error: error
  };
};

export const ProfilePicUploadApi = imageData => {
  const url = `${BASE_PATH}${SERVICE_PATH}/profile/image?v2=true`;
  return dispatch => {
    const apiToken = localStorage.getItem("X-Auth-Token");
    const headers = {
      "content-type": "multipart/form-data",
      "X-Auth-Token": apiToken
    };
    dispatch(getProfilePictureUpload());
    axios
      .post(url, imageData, { headers: headers })
      .then(res => {
        dispatch(setProfilePictureUpload(res));
        dispatch(userActions.profileDetailsApi());
      })
      .catch(error => {
        console.log(error.response);
        error.response !== undefined &&
          dispatch(profilePictureFail(error.response));
      });
  };
};
