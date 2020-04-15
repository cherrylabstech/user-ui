import * as ActionTypes from "../actions/LocationActions";
const initialState = {
  UserData: undefined,
  loading: false,
  error: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_DATA:
      return {
        UserData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        loading: false,
        UserData: action.UserData
      };

    case ActionTypes.USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        UserData: undefined
      };

    default:
      return state;
  }
};

export default UserReducer;
