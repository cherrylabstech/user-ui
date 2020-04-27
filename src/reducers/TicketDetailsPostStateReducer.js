import * as ActionTypes from "../actions/TicketDetailsAction";
const initialState = {
  loading: false,
  error: null
};

const TicketDetailPostStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TICKET_DETAIL_POST_STATE_DATA:
      return {
        loading: true,
        error: null
      };

    case ActionTypes.SET_TICKET_DETAIL_POST_STATE_DATA:
      return {
        loading: false,
        error: null
      };

    case ActionTypes.TICKET_DETAIL_POST_STATE_DATA_FAIL:
      return {
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default TicketDetailPostStateReducer;
