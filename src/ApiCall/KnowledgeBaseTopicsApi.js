import * as actionTypes from "../actions/KnowldgeBaseTopicsActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getKnowledgeBaseTopics = KnowledgeBaseTopicsData => {
  return {
    type: actionTypes.GET_KNOWLEDGE_BASE_TOPIC_ARTICLE
  };
};
export const setKnowledgeBaseTopics = (KnowledgeBaseTopicsData, length) => {
  return {
    type: actionTypes.SET_KNOWLEDGE_BASE_TOPIC_ARTICLE,
    KnowledgeBaseTopicsData: KnowledgeBaseTopicsData,
    length: length
  };
};
export const KnowledgeBaseTopicsFail = error => {
  return {
    type: actionTypes.KNOWLEDGE_BASE_TOPIC_ARTICLE_FAIL,
    error: error
  };
};

export const KnowledgeBaseTopicsApi = (id, length) => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/kb/topic/${id}`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };
    dispacth(getKnowledgeBaseTopics());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setKnowledgeBaseTopics(res.data, length));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(KnowledgeBaseTopicsFail(error.response.data));
      });
  };
};
