// visits.controller.ts

import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body
} from '@nestjs/common';
import { CreateVisitDto } from './visit.dto';
import { VisitsService } from './visits.service';

@Controller('visits')
export class VisitsController {
    constructor(private readonly visitsService: VisitsService) {}

    @Post()
    async create(@Body() createVisitDto: CreateVisitDto) {
        return this.visitsService.create(createVisitDto);
    }

    @Get()
    async findAll() {
        return this.visitsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.visitsService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() createVisitDto: CreateVisitDto
    ) {
        return this.visitsService.update(id, createVisitDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.visitsService.remove(id);
    }
}
