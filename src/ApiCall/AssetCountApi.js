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

export const AssetCountApi = values => {
  const token = localStorage.getItem("X-Auth-Token");
  const category =
    values && values.categoryId ? `&categoryId=${values.categoryId}` : ``;
  const assetType =
    values && values.assetTypeId ? `&assetTypeId=${values.assetTypeId}` : ``;
  const url = `${BASE_PATH}${SERVICE_PATH}/assets/count?query=${category}${assetType}`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getAssetCount());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setAssetCount(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispatch(AssetCountFail(error.response.data));
      });
  };
};
