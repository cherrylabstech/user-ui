    import * as actionTypes from "../actions/AssetCountActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getAssetCount = AssetCount => {
  return {
    type: actionTypes.GET_ASSET_COUNT
  };
};
export const setAssetCount = AssetCount => {
  return {
    type: actionTypes.SET_ASSET_COUNT,
    AssetCount: AssetCount
  };
};
export const AssetCountFail = error => {
  return {
    type: actionTypes.ASSET_COUNT_FAIL,
    error: error
  };
};

export const AssetCountApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/assets/count?query=`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispacth(getAssetCount());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setAssetCount(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(AssetCountFail(error.response.data));
      });
  };
};
