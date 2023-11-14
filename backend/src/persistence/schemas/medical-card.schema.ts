import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MedicalCardDocument = HydratedDocument<MedicalCard>;

@Schema()
export class MedicalCard {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' })
    doctorId: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
    clientId: string;
    @Prop()
    text: Date;
}

export const MedicalCardSchema = SchemaFactory.createForClass(MedicalCard);
