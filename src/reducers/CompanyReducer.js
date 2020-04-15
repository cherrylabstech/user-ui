import * as ActionTypes from "../actions/LocationActions";
const initialState = {
  CompanyData: undefined,
  loading: false,
  error: null
};

const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_COMPANY_DATA:
      return {
        CompanyData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_COMPANY_DATA:
      return {
        ...state,
        loading: false,
        CompanyData: action.CompanyData
      };

    case ActionTypes.COMPANY_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        CompanyData: undefined
      };

    default:
      return state;
  }
};

export default CompanyReducer;
