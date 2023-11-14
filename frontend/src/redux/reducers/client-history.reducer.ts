import {
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
} from '../actions/client-history.action';

interface HistoryState {
  loading: boolean;
  data: any[]; // Modify the type according to your data structure
  error: null | string;
}

const initialState: HistoryState = {
  loading: false,
  data: [],
  error: null,
};

const clientHistoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default clientHistoryReducer;