import * as ActionTypes from "../actions/WelcomeApiActions";
const initialState = {
  welcomeData: undefined,
  loading: true,
  error: undefined
};

const WelcomeMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_WELCOME_MESSAGE:
      return {
        ...state,
        loading: true,
        error: undefined
      };

    case ActionTypes.SET_WELCOME_MESSAGE:
      return {
        ...state,
        loading: false,
        welcomeData: action.welcomeData
      };

    case ActionTypes.WELCOME_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        welcomeData: undefined
      };

    default:
      return state;
  }
};

export default WelcomeMessageReducer;
