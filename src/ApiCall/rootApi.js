import { auth } from "./AuthApi";
import { welcome } from "./WelcomeMessageApi";
import { themeApi } from "./ThemeApi";
import { profileDetailsApi } from "./ProfileDetailsApi";
import { profileApi } from "./ProfileApi";
import { KnowledgeBaseApi } from "./KnowledgeBaseApi";
import { KnowledgeBaseArticleApi } from "./KnowledgeBaseArticlesApi";
import { KnowledgeBaseTopicsApi } from "./KnowledgeBaseTopicsApi";
import { CreateTicketApi } from "./CreateTicketApi";
import { PlanApi } from "./PlanApi";
import { PriorityApi, PriorityPostApi } from "./PriorityApi";
import { DashBoardApi } from "./DashBoardApi";
import { TicketListApi } from "./TicketListApi";
import { TicketListRefreshApi } from "./TicketListApi";
import { TicketCountApi } from "./TicketCountApi";
import { AssetListApi } from "./AssetListApi";
import { AssetDetailApi } from "./AssetDetailApi";
import { AssetCountApi } from "./AssetCountApi";
import { requestCategoryApi } from "./RequestCategoryApi";
import { AssetCategoryApi } from "./AssetCategory";
import { AssetTypeApi } from "./AssetTypeApi";
import { ChooseAssetApi } from "./ChooseAssetApi";
import { LocationApi } from "./LocationApi";
import { UserApi } from "./UserApi";
import { CompanyApi } from "./CompanyApi";
import { PropertiesApi } from "./PropertiesApi";
import { UploadApi } from "./UploadApi";
import { ProfilePicUploadApi } from "./ProfilePicUpload";
import { editProfileApi } from "./EditProfileApi";
import { TimeZoneApi } from "./TimeZoneApi";
import { TimeZonePostApi } from "./TimeZonePostApi";
import { TicketDetailApi } from "./TicketDetailApi";
import {
  TicketDetailStateApi,
  TicketDetailStatePostApi
} from "./TicketDetailStateApi";
import { PasswordApi } from "./PasswordApi";
export const userActions = {
  auth,
  welcome,
  themeApi,
  profileDetailsApi,
  profileApi,
  KnowledgeBaseApi,
  KnowledgeBaseArticleApi,
  KnowledgeBaseTopicsApi,
  CreateTicketApi,
  PlanApi,
  PriorityApi,
  PriorityPostApi,
  DashBoardApi,
  TicketListApi,
  TicketListRefreshApi,
  TicketCountApi,
  AssetListApi,
  AssetDetailApi,
  AssetCountApi,
  requestCategoryApi,
  AssetCategoryApi,
  AssetTypeApi,
  ChooseAssetApi,
  LocationApi,
  CompanyApi,
  UserApi,
  PropertiesApi,
  UploadApi,
  ProfilePicUploadApi,
  editProfileApi,
  TimeZoneApi,
  TimeZonePostApi,
  TicketDetailApi,
  TicketDetailStateApi,
  TicketDetailStatePostApi,
  PasswordApi
};
