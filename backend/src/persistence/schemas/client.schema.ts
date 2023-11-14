import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalCard' })
    medicalCardId: string;
    @Prop()
    email: string;
    @Prop()
    passwordHash: string;
    @Prop()
    name: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
