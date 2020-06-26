import * as ActionTypes from "../actions/timeZoneActions";
const initialState = {
  TimeZoneData: undefined,
  loading: false,
  error: null
};

const TimeZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TIMEZONE_DATA:
      return {
        TimeZoneData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_TIMEZONE_DATA:
      return {
        ...state,
        loading: false,
        TimeZoneData: action.TimeZoneData
      };

    case ActionTypes.TIMEZONE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        TimeZoneData: undefined
      };

    default:
      return state;
  }
};

export default TimeZoneReducer;
