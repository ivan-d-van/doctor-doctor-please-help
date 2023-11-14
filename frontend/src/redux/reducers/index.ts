import { combineReducers } from 'redux';
import authReducer from './auth';
import doctorScheduleReducer from './schedule';
import clientHistoryReducer from './client-history.reducer';

const allReducers = combineReducers({
    auth: authReducer,
    schedule: doctorScheduleReducer,
    clientHistory: clientHistoryReducer
});

export default allReducers;