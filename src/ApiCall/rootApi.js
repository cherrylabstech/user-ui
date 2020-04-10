import { auth } from "./AuthApi";
import { welcome } from "./WelcomeMessageApi";
import { themeApi } from "./ThemeApi";
import { profileDetailsApi } from "./ProfileDetailsApi";
import { profileApi } from "./ProfileApi";
import { KnowledgeBaseApi } from "./KnowledgeBaseApi";
import { KnowledgeBaseArticleApi } from "./KnowledgeBaseArticlesApi";
import { KnowledgeBaseTopicsApi } from "./KnowledgeBaseTopicsApi";
export const userActions = {
  auth,
  welcome,
  themeApi,
  profileDetailsApi,
  profileApi,
  KnowledgeBaseApi,
  KnowledgeBaseArticleApi,
  KnowledgeBaseTopicsApi
};
