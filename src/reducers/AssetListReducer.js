import * as ActionTypes from "../actions/AssetListActions";
const initialState = {
  AssetList: undefined,
  loading: false,
  error: null
};

const AssetListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ASSET_LIST:
      return {
        AssetList: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_ASSET_LIST:
      return {
        ...state,
        loading: false,
        AssetList: action.AssetList
      };

    case ActionTypes.ASSET_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        AssetList: undefined
      };

    default:
      return state;
  }
};

export default AssetListReducer;
