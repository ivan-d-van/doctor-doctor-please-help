import { IsString } from 'class-validator';

export class DoctorLoginDto {
    @IsString()
    email: string;
    @IsString()
    password: string;
}

export class DoctorRegisterDto {
    @IsString()
    name: string;
    @IsString()
    specialization: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
}
