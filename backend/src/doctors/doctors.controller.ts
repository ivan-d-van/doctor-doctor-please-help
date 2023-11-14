import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { DoctorService } from './doctors.service';
import { DoctorLoginDto, DoctorRegisterDto } from './doctors.dto';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) {}

    @Post('register')
    async register(@Body() registerDto: DoctorRegisterDto) {
        const passwordHash = await bcrypt.hash(registerDto.password, 10);
        delete registerDto.password;
        return this.doctorService.register({ ...registerDto, passwordHash });
    }

    @Post('login')
    async login(@Body() loginDto: DoctorLoginDto) {
        return this.doctorService.login(loginDto);
    }

    @Get('visits')
    async getVisits() {
        return this.doctorService.getVisits();
    }

    @Get('visits/:id')
    async getVisit(@Param('id') id: string) {
        return this.doctorService.getVisit(id);
    }

    @Put('visits/:id')
    async updateVisit(@Param('id') id: string, @Body() updateDto: any) {
        return this.doctorService.updateVisit(id, updateDto);
    }

    @Get('receipt')
    async getReceipts() {
        return this.doctorService.getReceipts();
    }

    @Get('receipt/:id')
    async getReceipt(@Param('id') id: string) {
        return this.doctorService.getReceipt(id);
    }
}
