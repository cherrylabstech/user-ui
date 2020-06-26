import * as ActionTypes from "../actions/LocationActions";
const initialState = {
  LocationData: undefined,
  loading: false,
  error: null
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LOCATION_DATA:
      return {
        LocationData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_LOCATION_DATA:
      return {
        ...state,
        loading: false,
        LocationData: action.LocationData
      };

    case ActionTypes.LOCATION_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        LocationData: undefined
      };

    default:
      return state;
  }
};

export default LocationReducer;
