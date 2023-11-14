import axios from 'axios'
import { apiConfig } from '../../config'
import { HistoryResult } from '../../interfaces/history';
  
export async function fetchHistory(idToken: string) {
    const res = await axios.post<HistoryResult>(`${apiConfig.url}/client/history`, {}, { headers: { Authorization: `Bearer ${idToken}` } });
    return res.data;
}