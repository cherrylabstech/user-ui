import * as ActionTypes from "../actions/propertiesActions";
const initialState = {
  propertiesData: undefined,
  loading: false,
  error: null
};

const PropertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROPERTIES_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_PROPERTIES_DATA:
      return {
        ...state,
        loading: false,
        propertiesData: action.propertiesData
      };

    case ActionTypes.PROPERTIES_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        propertiesData: undefined
      };

    default:
      return state;
  }
};

export default PropertiesReducer;
