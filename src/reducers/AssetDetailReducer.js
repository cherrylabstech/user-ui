import * as ActionTypes from "../actions/AssetDetailsActions";
const initialState = {
  AssetDetail: undefined,
  loading: false,
  error: null
};

const AssetDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ASSET_DETAIL:
      return {
        AssetDetail: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_ASSET_DETAIL:
      return {
        ...state,
        loading: false,
        AssetDetail: action.AssetDetail
      };

    case ActionTypes.ASSET_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        AssetDetail: undefined
      };

    default:
      return state;
  }
};

export default AssetDetailReducer;
