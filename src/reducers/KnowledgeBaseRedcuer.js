import * as ActionTypes from "../actions/KnowledgeBaseActions";
const initialState = {
  KnowledgeBaseData: undefined,
  loading: false,
  error: null
};

const KnowledgeBaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_KNOWLEDGE_BASE_TOPIC:
      return {
        KnowledgeBaseData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_KNOWLEDGE_BASE_TOPIC:
      return {
        ...state,
        loading: false,
        KnowledgeBaseData: action.KnowledgeBaseData
      };

    case ActionTypes.KNOWLEDGE_BASE_TOPIC_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        KnowledgeBaseData: undefined
      };

    default:
      return state;
  }
};

export default KnowledgeBaseReducer;
