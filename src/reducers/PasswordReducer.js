import * as ActionTypes from "../actions/PasswordActions";
const initialState = {
  PasswordData: undefined,
  loading: false,
  error: null
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PASSWORD_DATA:
      return {
        PasswordData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_PASSWORD_DATA:
      return {
        error: null,
        loading: false,
        PasswordData: action.PasswordData
      };

    case ActionTypes.PASSWORD_DATA_FAIL:
      return {
        loading: false,
        error: action.error,
        PasswordData: undefined
      };

    default:
      return state;
  }
};

export default passwordReducer;
