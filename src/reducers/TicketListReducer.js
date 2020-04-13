import * as ActionTypes from "../actions/TicketListActions";
const initialState = {
  TicketList: undefined,
  loading: false,
  error: null
};

const TicketListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TICKET_LIST:
      return {
        TicketList: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_TICKET_LIST:
      return {
        ...state,
        loading: false,
        TicketList: action.TicketList
      };

    case ActionTypes.TICKET_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        TicketList: undefined
      };

    default:
      return state;
  }
};

export default TicketListReducer;
