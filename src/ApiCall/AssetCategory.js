import * as actionTypes from "../actions/AssetActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getAssetCategory = CategoryData => {
  return {
    type: actionTypes.GET_ASSET_CATEGORY_DATA
  };
};
export const setAssetCategory = CategoryData => {
  return {
    type: actionTypes.SET_ASSET_CATEGORY_DATA,
    CategoryData: CategoryData
  };
};
export const AssetCategoryFail = error => {
  return {
    type: actionTypes.ASSET_CATEGORY_FAIL,
    error: error
  };
};

export const AssetCategoryApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/assetCategories`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getAssetCategory());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setAssetCategory(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispatch(AssetCategoryFail(error.response.data));
      });
  };
};
