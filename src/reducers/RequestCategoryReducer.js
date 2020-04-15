import * as ActionTypes from "../actions/RequestCategoryActions";
const initialState = {
  requestCategoryData: undefined,
  loading: false,
  error: null
};

const requestCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_REQUEST_CATEGORY_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_REQUEST_CATEGORY_DATA:
      return {
        ...state,
        loading: false,
        requestCategoryData: action.requestCategoryData
      };

    case ActionTypes.REQUEST_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        requestCategoryData: undefined
      };

    default:
      return state;
  }
};

export default requestCategoryReducer;
