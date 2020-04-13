import * as ActionTypes from "../actions/AssetCountActions";
const initialState = {
  AssetCount: undefined,
  loading: false,
  error: null
};

const AssetCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ASSET_COUNT:
      return {
        AssetCount: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_ASSET_COUNT:
      return {
        ...state,
        loading: false,
        AssetCount: action.AssetCount
      };

    case ActionTypes.ASSET_COUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        AssetCount: undefined
      };

    default:
      return state;
  }
};

export default AssetCountReducer;
