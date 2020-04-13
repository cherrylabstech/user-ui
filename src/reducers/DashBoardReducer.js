import * as ActionTypes from "../actions/DashBoardActions";
const initialState = {
  DashBoardData: undefined,
  loading: false,
  error: null
};

const DashBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DASHBOARD_DATA:
      return {
        DashBoardData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_DASHBOARD_DATA:
      return {
        ...state,
        loading: false,
        DashBoardData: action.DashBoardData
      };

    case ActionTypes.DASHBOARD_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        DashBoardData: undefined
      };

    default:
      return state;
  }
};

export default DashBoardReducer;
