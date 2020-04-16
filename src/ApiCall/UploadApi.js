import * as actionTypes from "../actions/UploadActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getUpload = () => {
  return {
    type: actionTypes.GET_UPLOAD_DATA
  };
};
export const setUpload = uploadData => {
  return {
    type: actionTypes.SET_UPLOAD_DATA,
    uploadData: uploadData
  };
};
export const uploadFail = error => {
  return {
    type: actionTypes.UPLOAD_DATA_FAIL,
    error: error
  };
};

export const UploadApi = formData => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/static/upload?v2=true`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispacth(getUpload());
    axios
      .post(url, formData, { headers: apiToken })
      .then(res => {
        dispacth(setUpload(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined && dispacth(uploadFail(error.response));
      });
  };
};
