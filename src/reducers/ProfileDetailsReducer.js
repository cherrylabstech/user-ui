import * as ActionTypes from "../actions/ProfileDetailsAction";
const initialState = {
  profileDetailsData: undefined,
  loading: false,
  error: null
};

const profileDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_DETAILS_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_PROFILE_DETAILS_DATA:
      return {
        ...state,
        loading: false,
        profileDetailsData: action.profileDetailsData
      };

    case ActionTypes.PROFILE_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        profileDetailsData: undefined
      };

    default:
      return state;
  }
};

export default profileDetailsReducer;
