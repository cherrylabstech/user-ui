import * as ActionTypes from "../actions/KnowledgeBaseArticlesApi";
const initialState = {
  KnowledgeBaseArticleData: undefined,
  loading: false,
  error: null
};

const KnowledgeBaseArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_KNOWLEDGE_BASE_ARTICLE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_KNOWLEDGE_BASE_ARTICLE:
      return {
        ...state,
        loading: false,
        KnowledgeBaseArticleData: action.KnowledgeBaseArticleData
      };

    case ActionTypes.KNOWLEDGE_BASE_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        KnowledgeBaseArticleData: undefined
      };

    default:
      return state;
  }
};

export default KnowledgeBaseArticleReducer;
