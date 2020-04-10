import * as actionTypes from "../actions/KnowledgeBaseActions";
import { BASE_PATH, SERVICE_PATH } from "../ApiBasePath/ApiBasePath";
import axios from "axios";
export const getKnowledgeBase = KnowledgeBaseData => {
  return {
    type: actionTypes.GET_KNOWLEDGE_BASE_TOPIC
  };
};
export const setKnowledgeBase = KnowledgeBaseData => {
  return {
    type: actionTypes.SET_KNOWLEDGE_BASE_TOPIC,
    KnowledgeBaseData: KnowledgeBaseData
  };
};
export const KnowledgeBaseFail = error => {
  return {
    type: actionTypes.KNOWLEDGE_BASE_TOPIC_FAIL,
    error: error
  };
};

export const KnowledgeBaseApi = () => {
  const token = localStorage.getItem("X-Auth-Token");
  const url = `${BASE_PATH}${SERVICE_PATH}/kb/topic`;
  return dispacth => {
    const apiToken = token !== null && { "X-Auth-Token": token };

    dispacth(getKnowledgeBase());
    axios
      .get(url, { headers: apiToken })
      .then(res => {
        dispacth(setKnowledgeBase(res.data));
      })
      .catch(error => {
        console.log(error);
        error.response !== undefined &&
          dispacth(KnowledgeBaseFail(error.response.data));
      });
  };
};
