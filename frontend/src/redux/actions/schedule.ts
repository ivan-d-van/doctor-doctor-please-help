import { Dispatch } from 'redux';
import { DoctorScheduleResult } from '../../interfaces/auth';
import { getSchedule } from '../../api/doctor/get-schedule.request';

// Action Types
export const FETCH_DOCTOR_SCHEDULE_REQUEST = 'FETCH_DOCTOR_SCHEDULE_REQUEST';
export const FETCH_DOCTOR_SCHEDULE_SUCCESS = 'FETCH_DOCTOR_SCHEDULE_SUCCESS';
export const FETCH_DOCTOR_SCHEDULE_FAILURE = 'FETCH_DOCTOR_SCHEDULE_FAILURE';

// Action Creators
export interface FetchDoctorScheduleRequestAction {
  type: typeof FETCH_DOCTOR_SCHEDULE_REQUEST;
}

export const fetchDoctorScheduleRequest = (): FetchDoctorScheduleRequestAction => ({
  type: FETCH_DOCTOR_SCHEDULE_REQUEST,
});

export interface FetchDoctorScheduleSuccessAction {
  type: typeof FETCH_DOCTOR_SCHEDULE_SUCCESS;
  payload: DoctorScheduleResult;
}

export const fetchDoctorScheduleSuccess = (schedule: DoctorScheduleResult): FetchDoctorScheduleSuccessAction => ({
  type: FETCH_DOCTOR_SCHEDULE_SUCCESS,
  payload: schedule,
});

export interface FetchDoctorScheduleFailureAction {
  type: typeof FETCH_DOCTOR_SCHEDULE_FAILURE;
  payload: string;
}

export const fetchDoctorScheduleFailure = (error: string): FetchDoctorScheduleFailureAction => ({
  type: FETCH_DOCTOR_SCHEDULE_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchDoctorSchedule = (dateStart: string, dateEnd: string, idToken: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDoctorScheduleRequest());
    try {
      // Replace the API call with your actual API endpoint for fetching doctor's schedule
      const schedule: DoctorScheduleResult = await getSchedule(dateStart, dateEnd, idToken);
      dispatch(fetchDoctorScheduleSuccess(schedule));
    } catch (error: any) {
      dispatch(fetchDoctorScheduleFailure(error.message));
    }
  };
};