import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitsController } from './visits.controller';
import { VisitsService } from './visits.service';
import { Visit } from 'src/persistence/schemas/visit.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Visit.name, schema: Visit }])],
    controllers: [VisitsController],
    providers: [VisitsService]
})
export class VisitModule {}
