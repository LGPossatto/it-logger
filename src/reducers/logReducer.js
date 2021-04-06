import {
  SET_LOADING,
  GET_LOGS,
  SEARCH_LOGS,
  ADD_LOG,
  DELETE_LOG,
  LOGS_ERROR,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./actions/types";

const inicialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const logReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case SEARCH_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    default:
      return state;
  }
};

export default logReducer;
