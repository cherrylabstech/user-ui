import * as ActionTypes from "../actions/AssetActions";
const initialState = {
  ChooseAssetData: undefined,
  loading: false,
  error: null
};

const ChooseAssetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHOOSE_ASSET_DATA:
      return {
        ChooseAssetData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_CHOOSE_ASSET_DATA:
      return {
        ...state,
        loading: false,
        ChooseAssetData: action.ChooseAssetData
      };

    case ActionTypes.CHOOSE_ASSET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        ChooseAssetData: undefined
      };

    default:
      return state;
  }
};

export default ChooseAssetReducer;
