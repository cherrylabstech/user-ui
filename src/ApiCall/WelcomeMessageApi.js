import * as ActionTypes from "../actions/WelcomeApiActions";
import axios from "axios";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
export const getWelcomeMessage = welcomeData => {
  return {
    type: ActionTypes.GET_WELCOME_MESSAGE
  };
};
export const setWelcomeMessage = welcomeData => {
  return {
    type: ActionTypes.SET_WELCOME_MESSAGE,
    welcomeData: welcomeData
  };
};
export const welcomeMessageFail = error => {
  return {
    type: ActionTypes.WELCOME_MESSAGE_FAIL,
    error: error
  };
};

export function welcome() {
  const url = `${BASE_PATH}${SERVICE_PATH}/home`;

  return dispatch => {
    dispatch(getWelcomeMessage());
    axios
      .get(url)
      .then(res => {
        dispatch(setWelcomeMessage(res.data));
      })
      .catch(error => {
        error.response !== undefined &&
          dispatch(welcomeMessageFail(error.response.data));
      });
  };
}
