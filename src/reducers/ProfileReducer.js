import * as ActionTypes from "../actions/ProfileActions";
const initialState = {
  profileData: undefined,
  loading: false,
  error: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_PROFILE_DATA:
      return {
        ...state,
        loading: false,
        profileData: action.profileData
      };

    case ActionTypes.PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        profileData: undefined
      };

    default:
      return state;
  }
};

export default profileReducer;
