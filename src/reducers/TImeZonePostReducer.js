import * as ActionTypes from "../actions/timeZonePostActions";
const initialState = {
  TimeZonePostData: undefined,
  loading: false,
  error: null
};

const TimeZonePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TIMEZONE_POST_DATA:
      return {
        TimeZonePostData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_TIMEZONE_POST_DATA:
      return {
        ...state,
        loading: false,
        TimeZonePostData: action.TimeZonePostData
      };

    case ActionTypes.TIMEZONE_POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        TimeZonePostData: undefined
      };

    default:
      return state;
  }
};

export default TimeZonePostReducer;
