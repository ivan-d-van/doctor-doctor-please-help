import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VisitDocument = HydratedDocument<Visit>;

@Schema()
export class Visit {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' })
    doctorId: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalCard' })
    medicalCardId: string;
    @Prop()
    date: Date;
    @Prop()
    status: string;
    @Prop()
    name: string;
}

export const VisitSchema = SchemaFactory.createForClass(Visit);
