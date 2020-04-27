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
import AssetListReducer from "./AssetListReducer";
import AssetCountReducer from "./AssetCountReducer";
import AssetDetailReducer from "./AssetDetailReducer";
import requestCategoryReducer from "./RequestCategoryReducer";
import LocationReducer from "./LocationReducer";
import CompanyReducer from "./CompanyReducer";
import UserReducer from "./UserReducer";
import ChooseAssetReducer from "./ChooseAssetReducer";
import AssetCategoryReducer from "./AssetCategoryReducer";
import AssetTypeReducer from "./AssetTypesReducer";
import PropertiesReducer from "./PropertiesReducer";
import UploadReducer from "./UploadReducer";
import profilePictureUploadReducer from "./ProfilePicUploadReducer";
import EditProfileReducer from "./EditProfilePostReducer";
import TimeZoneReducer from "./TimeZoneReducer";
import TimeZonePostReducer from "./TImeZonePostReducer";
import TicketDetailReducer from "./TicketDetailReducer";
import TicketDetailStateReducer from "./TicketDetailStateReducer";
import TicketDetailPostStateReducer from "./TicketDetailsPostStateReducer";
import PriorityPostReducer from "./PriorityPostReducer";
import passwordReducer from "./PasswordReducer";
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
  PriorityPostReducer,
  DashBoardReducer,
  TicketListReducer,
  TicketCountReducer,
  AssetListReducer,
  AssetDetailReducer,
  AssetCountReducer,
  requestCategoryReducer,
  LocationReducer,
  CompanyReducer,
  UserReducer,
  ChooseAssetReducer,
  AssetCategoryReducer,
  AssetTypeReducer,
  PropertiesReducer,
  UploadReducer,
  profilePictureUploadReducer,
  EditProfileReducer,
  TimeZoneReducer,
  TimeZonePostReducer,
  TicketDetailReducer,
  TicketDetailStateReducer,
  TicketDetailPostStateReducer,
  passwordReducer
});
