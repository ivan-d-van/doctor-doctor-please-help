import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientService } from './clients.service';
import { LoginDto, RegisterDto } from './clients.dto';

@Controller('clients')
export class ClientController {
    constructor(private readonly clientsService: ClientService) {}

    @Post('/register')
    async register(@Body() registerDto: RegisterDto) {
        return this.clientsService.register(registerDto);
    }

    @Post('/login')
    async login(@Body() loginDto: LoginDto) {
        return this.clientsService.login(loginDto);
    }

    @Get('/visits')
    async getVisits() {
        return this.clientsService.getVisits();
    }

    @Get('/visits/:id')
    async getVisit(@Param('id') id: string) {
        return this.clientsService.getVisit(id);
    }

    @Get('/tests')
    async getTests() {
        return this.clientsService.getTests();
    }

    @Get('/tests/:id')
    async getTest(@Param('id') id: string) {
        return this.clientsService.getTest(id);
    }

    @Get('/medical-card')
    async getMedicalCard() {
        return this.clientsService.getMedicalCard();
    }

    @Get('/doctors')
    async getDoctors() {
        return this.clientsService.getDoctors();
    }

    @Get('/doctors/:id')
    async getDoctor(@Param('id') id: string) {
        return this.clientsService.getDoctor(id);
    }

    @Get('/receipts')
    async getReceipts() {
        return this.clientsService.getReceipts();
    }

    @Get('/receipts/:id')
    async getReceipt(@Param('id') id: string) {
        return this.clientsService.getReceipt(id);
    }
}
