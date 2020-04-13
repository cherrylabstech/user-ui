import * as ActionTypes from "../actions/PlanActions";
const initialState = {
  PlanData: undefined,
  loading: false,
  error: null
};

const PlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PLAN_DATA:
      return {
        PlanData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_PLAN_DATA:
      return {
        ...state,
        loading: false,
        PlanData: action.PlanData
      };

    case ActionTypes.PLAN_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        PlanData: undefined
      };

    default:
      return state;
  }
};

export default PlanReducer;
