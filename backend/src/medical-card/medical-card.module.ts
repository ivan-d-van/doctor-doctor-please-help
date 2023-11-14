import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalCardController } from './medical-card.controller';
import { MedicalCardService } from './medical-card.service';
import { MedicalCard } from 'src/persistence/schemas/medical-card.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: MedicalCard.name, schema: MedicalCard }
        ])
    ],
    controllers: [MedicalCardController],
    providers: [MedicalCardService]
})
export class YourModule {}
