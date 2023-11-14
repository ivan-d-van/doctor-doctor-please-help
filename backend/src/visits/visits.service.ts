import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVisitDto } from './visit.dto';
import { Visit } from 'src/persistence/schemas/visit.schema';

@Injectable()
export class VisitsService {
    constructor(
        @InjectModel(Visit.name) private readonly visitModel: Model<Visit>
    ) {}

    async create(createVisitDto: CreateVisitDto): Promise<Visit> {
        const createdVisit = new this.visitModel(createVisitDto);
        return createdVisit.save();
    }

    async findAll(): Promise<Visit[]> {
        return this.visitModel.find().exec();
    }

    async findOne(id: string): Promise<Visit> {
        return this.visitModel.findById(id).exec();
    }

    async update(id: string, createVisitDto: CreateVisitDto): Promise<Visit> {
        return this.visitModel
            .findByIdAndUpdate(id, createVisitDto, { new: true })
            .exec();
    }

    async remove(id: string): Promise<Visit> {
        return this.visitModel.findByIdAndRemove(id).exec();
    }
}
