import * as ActionTypes from "../actions/PriorityActions";
const initialState = {
  loading: false,
  error: null
};

const PriorityPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POST_PRIORITY_DATA:
      return {
        loading: true,
        error: null
      };

    case ActionTypes.SET_POST_PRIORITY_DATA:
      return {
        loading: false,
        error: null
      };

    case ActionTypes.POST_PRIORITY_DATA_FAIL:
      return {
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default PriorityPostReducer;
