import * as ActionTypes from "../actions/ThemeActions";
const initialState = {
  themeData: undefined,
  loading: false,
  error: null
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_THEME_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_THEME_DATA:
      return {
        ...state,
        loading: false,
        themeData: action.themeData
      };

    case ActionTypes.THEME_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        themeData: undefined
      };

    default:
      return state;
  }
};

export default ThemeReducer;
