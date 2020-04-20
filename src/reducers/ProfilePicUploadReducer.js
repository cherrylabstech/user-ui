import * as ActionTypes from "../actions/ProfilePicUploadActions";
const initialState = {
  profileUploadData: undefined,
  loading: false,
  error: null
};

const profilePictureUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_PICTURE_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_PROFILE_PICTURE_DATA:
      return {
        ...state,
        loading: false,
        profileUploadData: action.profilePictureUploadData
      };

    case ActionTypes.PROFILE_PICTURE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        profileUploadData: undefined
      };

    default:
      return state;
  }
};

export default profilePictureUploadReducer;
