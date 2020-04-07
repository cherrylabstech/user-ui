import { combineReducers } from "redux";
import posts from "./postReducer";
import AuthReducer from "./authReducer";
export default combineReducers({
  posts,
  AuthReducer
});
