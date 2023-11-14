import axios from 'axios'
import { apiConfig } from '../../config'
import { LoginResponse, RegisterResponse } from '../../interfaces/auth';

export async function login(email: string, password: string): Promise<string> {
    const res = await axios.post<LoginResponse>(`${apiConfig.url}/client/login`, { email, password });
    return res.data.id_token;
}
  
export async function register(username: string, email: string, password: string): Promise<string> {
    const res = await axios.post<RegisterResponse>(`${apiConfig.url}/client/register`, { username, email, password });
    return res.data.id_token;
}