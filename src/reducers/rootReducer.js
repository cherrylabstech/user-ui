import { combineReducers } from "redux";
import posts from "./postReducer";
import AuthReducer from "./authReducer";
import WelcomeMessageReducer from "./welcomeMessageReducer";
import alert from "./alert.reducers";
import ThemeReducer from "./Theme.reducer";
import profileDetailsReducer from "./ProfileDetailsReducer";
import profileReducer from "./ProfileReducer";
import KnowledgeBaseReducer from "./KnowledgeBaseRedcuer";
import KnowledgeBaseArticleReducer from "./KnowledgeBaseArticlesReducer";
import KnowledgeBaseTopicsReducer from "./KnowledgeBaseTopicsReducer";
import createTicketReducer from "./CreateTicketReducer";
import PlanReducer from "./PlanReducer";
import PriorityReducer from "./PriorityReducer";
import DashBoardReducer from "./DashBoardReducer";
import TicketListReducer from "./TicketListReducer";
import TicketCountReducer from "./TicketCountReducer";
import AssetListReducer from "./AssetListReducer"
import AssetCountReducer from "./AssetCountReducer"
export default combineReducers({
  posts,
  AuthReducer,
  WelcomeMessageReducer,
  alert,
  ThemeReducer,
  profileDetailsReducer,
  profileReducer,
  KnowledgeBaseReducer,
  KnowledgeBaseArticleReducer,
  KnowledgeBaseTopicsReducer,
  createTicketReducer,
  PlanReducer,
  PriorityReducer,
  DashBoardReducer,
  TicketListReducer,
  TicketCountReducer,
  AssetListReducer,
  AssetCountReducer
});
