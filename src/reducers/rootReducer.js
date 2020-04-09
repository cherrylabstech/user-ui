import { combineReducers } from "redux";
import posts from "./postReducer";
import AuthReducer from "./authReducer";
import WelcomeMessageReducer from "./welcomeMessageReducer";
import alert from "./alert.reducers";
import ThemeReducer from "./Theme.reducer";
import profileDetailsReducer from "./ProfileDetailsReducer";
import profileReducer from "./ProfileReducer";
import KnowledgeBaseReducer from "./KnowledgeBaseRedcuer";
export default combineReducers({
  posts,
  AuthReducer,
  WelcomeMessageReducer,
  alert,
  ThemeReducer,
  profileDetailsReducer,
  profileReducer,
  KnowledgeBaseReducer
});
