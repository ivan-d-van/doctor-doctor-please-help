import { Module } from '@nestjs/common';
import { DoctorController } from './doctors.controller';
import { DoctorService } from './doctors.service';

@Module({
    controllers: [DoctorController],
    providers: [DoctorService]
})
export class ClientsModule {}
