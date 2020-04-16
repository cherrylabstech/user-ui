import * as ActionTypes from "../actions/UploadActions";
const initialState = {
  UploadData: undefined,
  loading: false,
  error: null
};

const UploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_UPLOAD_DATA:
      return {
        UploadData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_UPLOAD_DATA:
      return {
        ...state,
        loading: false,
        UploadData: action.uploadData
      };

    case ActionTypes.UPLOAD_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        UploadData: undefined
      };

    default:
      return state;
  }
};

export default UploadReducer;
