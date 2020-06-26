import * as ActionTypes from "../actions/TicketCountActions";
const initialState = {
  TicketCount: undefined,
  loading: false,
  error: null
};

const TicketCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TICKET_COUNT:
      return {
        TicketCount: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_TICKET_COUNT:
      return {
        ...state,
        loading: false,
        TicketCount: action.TicketCount
      };

    case ActionTypes.TICKET_COUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        TicketCount: undefined
      };

    default:
      return state;
  }
};

export default TicketCountReducer;
