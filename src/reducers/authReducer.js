import * as ActionTypes from "../actions/authActions";
const initialState = {
  authData: undefined,
  loading: false,
  error: null
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        authData: action
      };

    case ActionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        authData: undefined
      };

    default:
      return state;
  }
};

export default AuthReducer;
