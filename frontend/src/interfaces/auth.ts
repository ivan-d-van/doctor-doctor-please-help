import { Client } from "./common";

export interface LoginResponse {
  id_token: string;
}

export interface RegisterResponse {
  id_token: string;
}

export interface UserData {
  id: number
  name: string
  email: string
  balance: number
}

export interface UserList {
  id: number
  name: string
}

export interface DoctorScheduleResult {
  days: DoctorScheduleDay[]
}

export interface DoctorScheduleDay {
  date: string
  busy: boolean
  client?: Client
}
