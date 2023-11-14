import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalCard } from 'src/persistence/schemas/medical-card.schema';
import { CreateMedicalCardDto } from './medical-card.dto';

@Injectable()
export class MedicalCardService {
    constructor(
        @InjectModel(MedicalCard.name)
        private readonly medicalCardModel: Model<MedicalCard>
    ) {}

    async create(
        createMedicalCardDto: CreateMedicalCardDto
    ): Promise<MedicalCard> {
        const createdMedicalCard = new this.medicalCardModel(
            createMedicalCardDto
        );
        return createdMedicalCard.save();
    }

    async findAll(): Promise<MedicalCard[]> {
        return this.medicalCardModel.find().exec();
    }

    async findOne(id: string): Promise<MedicalCard> {
        return this.medicalCardModel.findById(id).exec();
    }

    async update(
        id: string,
        createMedicalCardDto: CreateMedicalCardDto
    ): Promise<MedicalCard> {
        return this.medicalCardModel
            .findByIdAndUpdate(id, createMedicalCardDto, { new: true })
            .exec();
    }

    async remove(id: string): Promise<MedicalCard> {
        return this.medicalCardModel.findByIdAndRemove(id).exec();
    }
}
