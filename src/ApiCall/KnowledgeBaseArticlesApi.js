import * as actionTypes from "../actions/KnowledgeBaseArticlesApi";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getKnowledgeBaseArticle = KnowledgeBaseArticleData => {
  return {
    type: actionTypes.GET_KNOWLEDGE_BASE_ARTICLE
  };
};
export const setKnowledgeBaseArticle = KnowledgeBaseArticleData => {
  return {
    type: actionTypes.SET_KNOWLEDGE_BASE_ARTICLE,
    KnowledgeBaseArticleData: KnowledgeBaseArticleData
  };
};
export const KnowledgeBaseArticleFail = error => {
  return {
    type: actionTypes.KNOWLEDGE_BASE_ARTICLE_FAIL,
    error: error
  };
};

export const KnowledgeBaseArticleApi = id => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/kb/article/${id}`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getKnowledgeBaseArticle());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setKnowledgeBaseArticle(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(KnowledgeBaseArticleFail(error.response.data));
      });
  };
};
