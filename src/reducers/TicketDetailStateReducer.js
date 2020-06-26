import * as ActionTypes from "../actions/TicketDetailsAction";
const initialState = {
  TicketDetailStateData: undefined,
  loading: false,
  error: null
};

const TicketDetailStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TICKET_DETAIL_STATE_DATA:
      return {
        TicketDetailStateData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_TICKET_DETAIL_STATE_DATA:
      return {
        ...state,
        loading: false,
        TicketDetailStateData: action.TicketDetailStateData
      };

    case ActionTypes.TICKET_DETAIL_STATE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        TicketDetailStateData: undefined
      };

    default:
      return state;
  }
};

export default TicketDetailStateReducer;
