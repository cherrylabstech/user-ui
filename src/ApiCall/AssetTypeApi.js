import * as actionTypes from "../actions/AssetActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getAssetType = AssetTypeData => {
  return {
    type: actionTypes.GET_ASSET_TYPE_DATA
  };
};
export const setAssetType = AssetTypeData => {
  return {
    type: actionTypes.SET_ASSET_TYPE_DATA,
    AssetTypeData: AssetTypeData
  };
};
export const assetTypeFail = error => {
  return {
    type: actionTypes.ASSET_TYPE_FAIL,
    error: error
  };
};

export const AssetTypeApi = ({ assetCategoryId }) => {
  const token = localStorage.getItem("X-Auth-Token");

  const categoryId = assetCategoryId
    ? `?assetCategoryId=${assetCategoryId}&`
    : ``;
  const url = `${BASE_PATH}${SERVICE_PATH}/assetTypes${categoryId}`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getAssetType());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setAssetType(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispatch(assetTypeFail(error.response.data));
      });
  };
};
