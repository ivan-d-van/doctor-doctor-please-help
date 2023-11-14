import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body
} from '@nestjs/common';
import { MedicalCardService } from './medical-card.service';
import { CreateMedicalCardDto } from './medical-card.dto';

@Controller('medical-cards')
export class MedicalCardController {
    constructor(private readonly medicalCardService: MedicalCardService) {}

    @Post()
    async create(@Body() createMedicalCardDto: CreateMedicalCardDto) {
        return this.medicalCardService.create(createMedicalCardDto);
    }

    @Get()
    async findAll() {
        return this.medicalCardService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.medicalCardService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() createMedicalCardDto: CreateMedicalCardDto
    ) {
        return this.medicalCardService.update(id, createMedicalCardDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.medicalCardService.remove(id);
    }
}
