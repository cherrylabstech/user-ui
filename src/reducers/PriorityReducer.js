import * as ActionTypes from "../actions/PriorityActions";
const initialState = {
  PriorityData: undefined,
  loading: false,
  error: null
};

const PriorityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRIORITY_DATA:
      return {
        PriorityData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_PRIORITY_DATA:
      return {
        ...state,
        loading: false,
        PriorityData: action.PriorityData
      };

    case ActionTypes.PRIORITY_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        PriorityData: undefined
      };

    default:
      return state;
  }
};

export default PriorityReducer;
