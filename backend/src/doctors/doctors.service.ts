import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { LoginDto } from './doctors.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from 'src/persistence/schemas/doctor.schema';

@Injectable()
export class DoctorService {
    constructor(@InjectModel(Doctor.name) private doctorModel: Model<Doctor>) {}

    async register(doctor: Omit<Doctor, 'id'>) {
        const createdDoc = new this.doctorModel(doctor);
        await createdDoc.save();
    }

    login(loginDto: LoginDto) {
        // Mocked method to authenticate a doctor and return a JWT token
        return Promise.resolve({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        });
    }

    getVisits() {
        // Mocked method to retrieve a list of visits for a doctor
        return Promise.resolve([
            {
                id: '1',
                doctorId: '1',
                medicalCardId: '1',
                datetime: '2022-01-01T10:00:00Z',
                status: 'confirmed',
                receiptId: '1',
                testIds: ['1']
            },
            {
                id: '2',
                doctorId: '1',
                medicalCardId: '2',
                datetime: '2022-02-15T14:30:00Z',
                status: 'confirmed',
                receiptId: '2',
                testIds: []
            },
            {
                id: '3',
                doctorId: '2',
                medicalCardId: '3',
                datetime: '2022-03-30T11:15:00Z',
                status: 'pending',
                receiptId: null,
                testIds: ['2', '3']
            }
        ]);
    }

    getVisit(id: string) {
        // Mocked method to retrieve a single visit for a doctor by ID
        return Promise.resolve({
            id,
            doctorId: '1',
            medicalCardId: '1',
            datetime: '2022-01-01T10:00:00Z',
            status: 'confirmed',
            receiptId: '1',
            testIds: ['1']
        });
    }

    updateVisit(id: string, updateDto: any) {
        // Mocked method to update a visit for a doctor by ID
        return Promise.resolve({ id, ...updateDto });
    }

    getReceipts() {
        // Mocked method to retrieve a list of receipts for a doctor
        return Promise.resolve();
    }

    getReceipt(id: string) {
        // Mocked method to retrieve a single receipt for a doctor by ID
        return Promise.resolve();
    }
}
