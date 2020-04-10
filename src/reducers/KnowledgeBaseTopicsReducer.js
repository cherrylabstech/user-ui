import * as ActionTypes from "../actions/KnowldgeBaseTopicsActions";
const initialState = {
  KnowledgeBaseTopicsData: [],
  loading: false,
  error: null
};

const KnowledgeBaseTopicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_KNOWLEDGE_BASE_TOPIC_ARTICLE:
      return {
        KnowledgeBaseTopicsData: [],
        loading: true,
        error: null
      };

    case ActionTypes.SET_KNOWLEDGE_BASE_TOPIC_ARTICLE:
      return {
        ...state,
        loading: false,
        KnowledgeBaseTopicsData: [
          ...state.KnowledgeBaseTopicsData,
          action.KnowledgeBaseTopicsData
        ]
      };

    case ActionTypes.KNOWLEDGE_BASE_TOPIC_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        KnowledgeBaseTopicsData: undefined
      };

    default:
      return state;
  }
};

export default KnowledgeBaseTopicsReducer;
