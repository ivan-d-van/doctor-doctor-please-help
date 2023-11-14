import axios from 'axios'
import { apiConfig } from '../../config'
import { DoctorScheduleResult } from '../../interfaces/auth';
  
export async function getSchedule(dateStart: string, dateEnd: string, idToken: string) {
    const res = await axios.post<DoctorScheduleResult>(`${apiConfig.url}/client/visits`, { dateStart, dateEnd }, { headers: { Authorization: `Bearer ${idToken}` } });
    return res.data;
}