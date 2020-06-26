import * as actionTypes from "../actions/AssetListActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
import { Pagination } from "../helpers/Pagination";
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

export const AssetListApi = location => {
  const page = Pagination(location);
  const from = page.from || 0;
  const to = page.to || 10;
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/assets?query=&from=${from}&to=${to}`;
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
