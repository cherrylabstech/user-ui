import * as ActionTypes from "../actions/AssetActions";
const initialState = {
  AssetTypeData: undefined,
  loading: false,
  error: null
};

const AssetTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ASSET_TYPE_DATA:
      return {
        AssetTypeData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_ASSET_TYPE_DATA:
      return {
        ...state,
        loading: false,
        AssetTypeData: action.AssetTypeData
      };

    case ActionTypes.ASSET_TYPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        AssetTypeData: undefined
      };

    default:
      return state;
  }
};

export default AssetTypeReducer;
