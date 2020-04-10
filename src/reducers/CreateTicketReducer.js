import * as ActionTypes from "../actions/CreateTicket";
const initialState = {
  createTicketData: undefined,
  loading: false,
  error: null
};

const createTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CREATE_FORM:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.SET_CREATE_FORM:
      return {
        ...state,
        loading: false,
        createTicketData: action.createFormData
      };

    case ActionTypes.CREATE_FORM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        createTicketData: undefined
      };

    default:
      return state;
  }
};

export default createTicketReducer;
