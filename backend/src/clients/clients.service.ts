import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './clients.dto';

@Injectable()
export class ClientService {
    register(registerDto: RegisterDto) {
        // Mocked method to create a new client and return its ID
        return Promise.resolve({ id: '1234567890' });
    }

    login(loginDto: LoginDto) {
        // Mocked method to authenticate a client and return a JWT token
        return Promise.resolve({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        });
    }

    getVisits() {
        // Mocked method to retrieve a list of visits for a client
        return Promise.resolve([
            {
                id: '1',
                date: '2022-01-01',
                doctor: 'Dr. Smith',
                notes: 'Routine checkup'
            },
            {
                id: '2',
                date: '2022-02-15',
                doctor: 'Dr. Lee',
                notes: 'Follow-up appointment'
            },
            {
                id: '3',
                date: '2022-03-30',
                doctor: 'Dr. Kim',
                notes: 'Annual physical exam'
            }
        ]);
    }

    getVisit(id: string) {
        // Mocked method to retrieve a single visit for a client by ID
        return Promise.resolve({
            id,
            date: '2022-01-01',
            doctor: 'Dr. Smith',
            notes: 'Routine checkup'
        });
    }

    getTests() {
        // Mocked method to retrieve a list of medical tests for a client
        return Promise.resolve([
            {
                id: '1',
                date: '2022-01-01',
                name: 'Blood test',
                results: 'Normal'
            },
            {
                id: '2',
                date: '2022-02-15',
                name: 'X-ray',
                results: 'No abnormalities found'
            },
            {
                id: '3',
                date: '2022-03-30',
                name: 'MRI',
                results: 'Mild inflammation detected'
            }
        ]);
    }

    getTest(id: string) {
        // Mocked method to retrieve a single medical test for a client by ID
        return Promise.resolve({
            id,
            date: '2022-01-01',
            name: 'Blood test',
            results: 'Normal'
        });
    }

    getMedicalCard() {
        // Mocked method to retrieve the medical card for a client
        return Promise.resolve({
            name: 'John Doe',
            birthdate: '1980-01-01',
            bloodType: 'O+',
            allergies: ['Penicillin', 'Pollen']
        });
    }

    getDoctors() {
        // Mocked method to retrieve a list of doctors
        return Promise.resolve([
            { id: '1', name: 'Dr. Smith', specialty: 'General Medicine' },
            { id: '2', name: 'Dr. Lee', specialty: 'Pediatrics' },
            { id: '3', name: 'Dr. Kim', specialty: 'Cardiology' }
        ]);
    }

    getDoctor(id: string) {
        // Mocked method to retrieve a single doctor by ID
        return Promise.resolve({
            id,
            name: 'Dr. Smith',
            specialty: 'General Medicine'
        });
    }

    getReceipt(id: string) {
        // Mocked method to retrieve a list of receipts for a client
        return Promise.resolve({
            id,
            date: '2022-01-01',
            description: 'Need to take aspirine'
        });
    }

    getReceipts() {
        // Mocked method to retrieve a list of receipts for a client
        return Promise.resolve([
            {
                id: '1',
                date: '2022-01-01',
                description: 'Need to take aspirine'
            },
            {
                id: '2',
                date: '2022-02-15',
                description: 'Need to take CBD to get rid of pain '
            }
        ]);
    }
}
