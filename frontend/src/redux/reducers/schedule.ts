import { DoctorScheduleResult } from '../../interfaces/auth';
import {
  FETCH_DOCTOR_SCHEDULE_REQUEST,
  FETCH_DOCTOR_SCHEDULE_SUCCESS,
  FETCH_DOCTOR_SCHEDULE_FAILURE,
  FetchDoctorScheduleRequestAction,
  FetchDoctorScheduleSuccessAction,
  FetchDoctorScheduleFailureAction,
} from '../actions/schedule';

interface DoctorScheduleState {
  schedule?: DoctorScheduleResult;
  loading: boolean;
  error: string | null;
}

const initialState: DoctorScheduleState = {
  loading: false,
  error: null,
};

const doctorScheduleReducer = (state = initialState, action: DoctorScheduleActionTypes): DoctorScheduleState => {
  switch (action.type) {
    case FETCH_DOCTOR_SCHEDULE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DOCTOR_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        schedule: action.payload,
      };
    case FETCH_DOCTOR_SCHEDULE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default doctorScheduleReducer;

export type DoctorScheduleActionTypes =
  | FetchDoctorScheduleRequestAction
  | FetchDoctorScheduleSuccessAction
  | FetchDoctorScheduleFailureAction;