    import * as actionTypes from "../actions/AssetListActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getAssetList = AssetList => {
  return {
    type: actionTypes.GET_ASSET_LIST
  };
};
export const setAssetList = AssetList => {
  return {
    type: actionTypes.SET_ASSET_LIST,
    AssetList: AssetList
  };
};
export const AssetListFail = error => {
  return {
    type: actionTypes.ASSET_LIST_FAIL,
    error: error
  };
};

export const AssetListApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/assets?query=&from=0&to=10`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispacth(getAssetList());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setAssetList(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(AssetListFail(error.response.data));
      });
  };
};
