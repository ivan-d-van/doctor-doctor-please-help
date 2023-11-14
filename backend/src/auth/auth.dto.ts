import { LoginDto, RegisterDto } from 'src/clients/clients.dto';
import { DoctorLoginDto, DoctorRegisterDto } from 'src/doctors/doctors.dto';

export type CommonLoginDto = LoginDto | DoctorLoginDto;

export type CommonRegisterDto = RegisterDto | DoctorRegisterDto;

export type BaseTokenData = { email: string };

export interface TokenData extends BaseTokenData {
    role: string;
}
