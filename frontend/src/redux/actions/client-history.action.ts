
import { AnyAction, Dispatch } from 'redux';
import { fetchHistory } from '../../api/client/get-history.request';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export const FETCH_HISTORY_REQUEST = 'FETCH_HISTORY_REQUEST';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE';

const fetchHistoryRequest = () => ({
  type: FETCH_HISTORY_REQUEST,
});

const fetchHistorySuccess = (historyData: any) => ({
  type: FETCH_HISTORY_SUCCESS,
  payload: historyData,
});

const fetchHistoryFailure = (error: any) => ({
  type: FETCH_HISTORY_FAILURE,
  payload: error,
});

export const fetchAppointmentHistory = (idToken: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchHistoryRequest());
      const historyData = await fetchHistory(idToken);
      dispatch(fetchHistorySuccess(historyData));
    } catch (error) {
      dispatch(fetchHistoryFailure(error));
    }
  };
};