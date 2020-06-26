import * as actionTypes from "../actions/AssetDetailsActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getAssetDetail = AssetDetail => {
  return {
    type: actionTypes.GET_ASSET_DETAIL
  };
};
export const setAssetDetail = AssetDetail => {
  return {
    type: actionTypes.SET_ASSET_DETAIL,
    AssetDetail: AssetDetail
  };
};
export const AssetDetailFail = error => {
  return {
    type: actionTypes.ASSET_DETAIL_FAIL,
    error: error
  };
};

export const AssetDetailApi = id => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/assets/${id || 283}`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispacth(getAssetDetail());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setAssetDetail(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(AssetDetailFail(error.response.data));
      });
  };
};
