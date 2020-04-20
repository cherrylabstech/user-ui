import * as ActionTypes from "../actions/EditProfilePost";
const initialState = {
  EditProfileData: undefined,
  loading: false,
  error: null
};

const EditProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_EDIT_PROFILE_DATA:
      return {
        EditProfileData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_EDIT_PROFILE_DATA:
      return {
        ...state,
        loading: false,
        EditProfileData: action.editProfileData
      };

    case ActionTypes.EDIT_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        EditProfileData: undefined
      };

    default:
      return state;
  }
};

export default EditProfileReducer;
