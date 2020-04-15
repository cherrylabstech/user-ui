import * as ActionTypes from "../actions/AssetActions";
const initialState = {
  AssetCategoryData: undefined,
  loading: false,
  error: null
};

const AssetCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ASSET_CATEGORY_DATA:
      return {
        AssetCategoryData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_ASSET_CATEGORY_DATA:
      return {
        ...state,
        loading: false,
        AssetCategoryData: action.CategoryData
      };

    case ActionTypes.ASSET_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        AssetCategoryData: undefined
      };

    default:
      return state;
  }
};

export default AssetCategoryReducer;
