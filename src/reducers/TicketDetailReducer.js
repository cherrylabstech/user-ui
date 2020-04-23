import * as ActionTypes from "../actions/TicketDetailsAction";
const initialState = {
  TicketDetailData: undefined,
  loading: false,
  error: null
};

const TicketDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TICKET_DETAIL_DATA:
      return {
        TicketDetailData: undefined,
        loading: true,
        error: null
      };

    case ActionTypes.SET_TICKET_DETAIL_DATA:
      return {
        ...state,
        loading: false,
        TicketDetailData: action.TicketDetailData
      };

    case ActionTypes.TICKET_DETAIL_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        TicketDetailData: undefined
      };

    default:
      return state;
  }
};

export default TicketDetailReducer;
