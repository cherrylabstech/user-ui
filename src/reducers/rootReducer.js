import { combineReducers } from "redux";
import posts from "./postReducer";
import AuthReducer from "./authReducer";
import WelcomeMessageReducer from "./welcomeMessageReducer";
export default combineReducers({
  posts,
  AuthReducer,
  WelcomeMessageReducer
});
