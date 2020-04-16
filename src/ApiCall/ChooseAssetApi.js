import * as actionTypes from "../actions/AssetActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getChooseAsset = ChooseAssetData => {
  return {
    type: actionTypes.GET_CHOOSE_ASSET_DATA
  };
};
export const setChooseAsset = ChooseAssetData => {
  return {
    type: actionTypes.SET_CHOOSE_ASSET_DATA,
    ChooseAssetData: ChooseAssetData
  };
};
export const chooseAssetFail = error => {
  return {
    type: actionTypes.CHOOSE_ASSET_FAIL,
    error: error
  };
};

export const ChooseAssetApi = ({ assetCategoryId, assetTypeId, to }) => {
  const token = localStorage.getItem("X-Auth-Token");
  const categoryId = assetCategoryId ? `&categoryId=${assetCategoryId}` : ``;
  const modelId = assetTypeId ? `&modelId=${assetTypeId}` : ``;
  const url = `${BASE_PATH}${SERVICE_PATH}/assets?query=${modelId}${categoryId}&from=0&to=${to ||
    10}`;
  return dispatch => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispatch(getChooseAsset());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispatch(setChooseAsset(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispatch(chooseAssetFail(error.response.data));
      });
  };
};
